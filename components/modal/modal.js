;(function ( w, doc ) {

  'use strict';

  var A11yModal = {};

  A11yModal.NS = "A11yModal";

  // setup global class variables
  var modalTrigger      = '[data-action="modal-open"]';

  var modal             = '.a11y-modal';

  var modalDoc          = '.modal';
  var modalTitle        = '[data-modal-title]';
  var modalClose        = '[data-modal-close]';

  var genModalClose = document.createElement('button');

  genModalClose.setAttribute('type', 'button');
  genModalClose.setAttribute('data-modal-close', 'true');
  genModalClose.classList.add('modal__outro__close');
  genModalClose.innerHTML = '<span aria-hidden="true">x</span>';

  var html             = doc.documentElement;

  var bodyElements      = 'a11y-hide-if-modal-open';

  // use this defualt title if the attr isn't set
  var safetyModalTitle  = "Dialog Window";

  var a11yModal = function ( el ) {

    //for (var z = 0; z < el.length; z = z + 1) {

      var id = el.id;
      var $self = doc.getElementById(id);

      // setup modals properly
      var setupA11yModal = function () {

          // setup each modal instance to have the
          // appropriate attributes. These attributes
          // are applied to what would be considered the
          // modal container, or 'overlay'

          //var $this = $self;
          var $findTitle = $self.querySelector(modalTitle);
          var $findHeading = $self.querySelector('[data-modal-title]');
          var $thisLabel;

          // first check to see what sort of dialog this should be
          // if a data-modal-alert attribute is set to true, then
          // this is meant to be an alert dialog, so set the role
          // to 'alertdialog'. If it's not set, it's mean to be
          // a normal dialog. So set the role to just 'dialog'
          if ( $self.getAttribute('data-modal-alert') === 'true' ) {
            $self.setAttribute('role', 'alertdialog');
          }
          else {
            $self.setAttribute('role', 'dialog');
          }

          // we will need to set focus to the modal content
          // container for focus trapping reasons, so we
          // need this to have a tabindex
          $self.setAttribute('tabindex', '-1');
          $self.querySelector(modalDoc).setAttribute('tabindex', '-1');

          // check to see if an aria-label was set on the modal
          // if not, then start running checks to apply an aria-labelledby
          if ( !$self.getAttribute('aria-label') ) {

            // if the modal window has a child modalTitle set,
            // then add an aria-labelledby attribute to the dialog,
            // pointing to that element.
            if ( $findTitle ) {

              $thisLabel = $findTitle.getAttribute('id');

            } //if

            // in the event that a modalTitle wasn't manually set,
            // then we should look to see if there's a heading element
            // present at all, and then make THAT the source for the
            // aria-labelledby
            else if ( $findHeading ) {

              // does the heading we found have an id already?
              // let's check
              if ( $findHeading.setAttribute('id') ) {

                $thisLabel = $findHeading.setAttribute('id');

              } //if

              // if it doesn't, then generate one
              else {

                $thisLabel = $self.setAttribute('id') + '_title';

                $findHeading.setAttribute('id', $thisLabel);

              } //else

            } // else/if

            $self.setAttribute( 'aria-labelledby', $thisLabel );

          } // if

        // setup each modal content area (the component that
        // contains the actual content)
        var modalDocVar = $self.querySelectorAll(modalDoc);

        for (var j = 0; j < modalDocVar.length; j = j + 1) {

          var modalObj = modalDocVar[j];

          // important for older versions of NVDA to accurately
          // understand a modal's content
          modalObj.setAttribute('role', 'document');

          // Modals need a close button, and it should be the last
          // element in the modal.

          // If a modal doesn't have a close button, create it.
          if ( typeof modalObj.querySelector(modalClose) === 'undefined') {

            if ( typeof modalObj.querySelector('.modal__outro') === 'undefined' ) {

              modalObj.querySelector('.modal__outro').appendChild(genModalClose);

            } else {

              modalObj.appendChild(genModalClose);

            } // if/else

          } // if

          // Set aria-label and control attributes to the
          // close trigger.
          modalObj.querySelector(modalClose).setAttribute('aria-label', 'Close Modal');
          modalObj.querySelector(modalClose).setAttribute('aria-controls', modalObj.parentNode.getAttribute('id'));

        } // end for loop

      },

      // setup modal triggers
      // the following applies needed aria-attributes
      // to the modal triggers, as well as doing a
      // final check to ensure that the modal window
      // has appropriate labeling
      setupA11yModalTriggers = function () {

        var modalTriggerEl = doc.querySelectorAll(modalTrigger);
        var modalTriggerCount = modalTriggerEl.length;

        for (var m = 0; m < modalTriggerCount; m = m + 1) {

          var $this = modalTriggerEl[m];
          var $grabTarget;
          var $modalTarget;

          // if the trigger is a link, we need to give it a
          // button role.
          if ( $this.getAttribute('href') ) {

            $this.setAttribute('role', 'button');

          }

          // The triggers need to point to the modals they control via
          // the aria-controls attribute. So run a check to see if the
          // attribute exists on the button.
          //
          // It's likely that it WON'T exist, as the optimal method for
          // the minimum mark-up is to use a data-modal-open attribute
          // instead. The reason for this is that in situations without
          // JavaScript, we don't want partial ARIA hooks, as that can
          // create confusion for ATs that would expect certain
          // functionality that wouldn't be available due to lack of JS.
          if ( !$this.getAttribute('aria-controls') ) {

            // make sure that the trigger actually triggers something.
            // if it there's no data-modal-open attribute set, then
            // pull the target from the href
            if ( $this.getAttribute('data-modal-open') ) {

              $grabTarget = $this.getAttribute('data-modal-open');
              $this.setAttribute('aria-controls', $grabTarget );

            }
            // if there's no data-modal-open, pull the target from
            // from the href
            else if ( $this.attr('href') ) {

              $grabTarget = $this.getAttribute('href').split('#')[1];
              $this.setAttribute('aria-controls', $grabTarget );

            }
            // if neither of the above are set, then this just
            // won't work and you're clearly expecting this to
            // open by magic.
            else {
              console.log("No target set. A target is set by setting the value of an aria-controls attribute, which if absent, can be generated by the trigger's href URI, or a data-modal-open attribute to the value of the modal window ID you are attempting to open.");
              return false;
            }

          } // end if aria-controls

          // now that the aria-controls is set, point to the modal's target
          // so we can run the next if
          $modalTarget = doc.querySelector('#' + $this.getAttribute('aria-controls') );

          // finally a last check to see if the trigger is meant to launch
          // an alert dialog modal. If the alertdialog role wasn't set during
          // the initial setup function, then look to see if the 'data-modal-alert'
          // attribute is present on the trigger, and if so, apply the alertdialog
          // role to the modal on trigger activation.
          if ( $this.getAttribute('data-modal-alert') === 'true' && $modalTarget.getAttribute('role') !== 'alertdialog' ) {
            $modalTarget.setAttribute('role', 'alertdialog');
          }

        } // for loop
      },


      // Place modal window(s) as the first child(ren)
      // of the body element so tabbing backwards can
      // move focus into the browser's address bar
      organizeDOM = function () {

        var body = doc.body;
        var modalEl = doc.querySelectorAll(modal);
        var modalElCount = modalEl.length;

        // place all the modal dialogs at the top of the DOM, as the
        // first children of BODY. This will allow for backwards tabbing
        // into the browser's address bar, where as if the modals were
        // not located at the top of the DOM, keyboard focus would be
        // completely trapped within the modal window.

        for( var k = 0; k < modalElCount; k = k + 1) {
          body.insertBefore( modalEl[k], body.firstChild );
        }

        // for all direct children of the BODY element, add a class
        // to target during open/close
        body.querySelector('*:not(.a11y-modal)').classList.add(bodyElements);

      },

      openA11yModal = function ( e ) {

        // setup vars
        var $this = e.target;
        var $modalTarget = doc.getElementById( $this.getAttribute('aria-controls') );

        // Check to see if the modal has either an aria-label or labelledby attribute
        // if not, that means that the modal didn't have a manually set aria-label,
        // nor does the modal have any sort of heading element to draw a title from.
        // In this instance, pull the safetyModalTitle var in as an aria-label
        if ( !$modalTarget.getAttribute('aria-labelledby') && !$modalTarget.getAttribute('aria-label') ) {

          // Last ditch effort to allow control over what the aria-label will be.
          // If the data-set-modal-title attribute is set to the modal trigger,
          // its value will be set as the modal's aria-label
          if ( $this.getAttribute('data-set-modal-title') ) {
            safetyModalTitle = $this.getAttribute('data-set-modal-title');
          }

          // set an aria-label to the modal
          $modalTarget.setAttribute('aria-label', safetyModalTitle );

        } // if

        // traps focus while the modal is open
        trapFocus();

        // if modal trigger is an <a>, make sure that URI isn't
        // updated and more importantly that the document doesn't
        // auto-jump to the DOM location of the modal window.
        e.preventDefault();

        // set that modal be visible, controlled by the
        // aria-hidden attribute and CSS
        // then shift focus to it
        $modalTarget.setAttribute('aria-hidden', 'false');

        // add a class to the HTML, to allow for a CSS hook
        // to help restrict document scroll while the modal
        // is open
        html.classList.add('modal-is-open');

        // Hide main document content from screen readers by
        // applying an aria-hidden attribute to all direct
        // siblings of the modal windows. (var bodyElements)
        doc.querySelector('.' + bodyElements).setAttribute('aria-hidden', 'true');

        // finally, apply focus to the newly opened modal window
        $modalTarget.querySelector(modalDoc).focus();

      },

      // Bind to both the button click and the escape key to
      // close the modal window  but only if isModalOpen is set to true
      closeA11yModal = function ( e ) {

        e.preventDefault();

        var returnFocus = doc.querySelectorAll('[aria-controls="' + $self.getAttribute('id') + '"]');
        var returnFocusCount = returnFocus.length;

        returnFocus = returnFocus[returnFocusCount - 1];

        html.classList.remove('modal-is-open');
        $self.setAttribute('aria-hidden', 'true');

        // remove the aria-hidden that was applied during modal open
        doc.querySelector('.' + bodyElements).removeAttribute('aria-hidden');

        returnFocus.focus();

      },

      // keyboard controls specific to the modal dialog windows
      keytrollsA11yModalTrigger = function ( e ) {

        var keyCode = e.keyCode || e.which;

        switch ( keyCode ) {

          // space & enter
          case 32:
          case 13:
            e.stopPropagation();
            e.target.click();
            break;

        } // switch

      },

      isDescendant = function ( parent, child ) {

      	// get the parent node
      	var node = child.parentNode;

      	// check to see if the parent passed in matches the actual parent in the DOM
      	while (node !== null) {
      		if (node == parent) {
      			return true;
      		}
      		node = node.parentNode;
      	}

      	return false;
      },

      // trap focus within the modal window, because otherwise
      // users can tab to obscured elements, and that's just
      // bad UX.
      trapFocus = function () {
        var $trapArea = $self.querySelector(modalDoc),
            $trapAreaClose = $self.querySelector(modalClose);

        $trapArea.addEventListener('focus', function ( e ) {

            if ( $trapArea !== e.target && !isDescendant( $trapArea, e.target )) {
              console.log('BUG: Outside the modal');
              $trapAreaClose.focus();
            }

        }, false);

      }; // trap focus

      // run setup functions
      organizeDOM();
      setupA11yModal();
      setupA11yModalTriggers();

      // close the modal is the overlay is clicked
      $self.addEventListener("click", function(e) {
        if ( e.target === $self.querySelector(modalDoc).parentNode ) {
          e.stopPropagation();
          closeA11yModal(e);
        }
      }, false);

      // close the modal on ESC
      $self.addEventListener("keydown", function(e) {
          if(e.keyCode == 27 && html.classList.contains('modal-is-open')) {
            closeA11yModal(e);
          }
      }, false);

      // close the modal if you click the close button
      $self.querySelector(modalClose).addEventListener('click', function(e) {
        closeA11yModal(e);
      }, false );

      // open the modal when the trigger is clicked
      doc.addEventListener("click", function(e) {
        if (e.target.matches( modalTrigger )) {
          e.stopPropagation();
          openA11yModal(e);
        }
      }, false);

      // making sure the modal triggers open with <enter> and <space> (making it act like a button, if it's a link)
      doc.addEventListener("keydown", function(e) {
        if (e.target.matches( modalTrigger )) {
          e.stopPropagation();
          keytrollsA11yModalTrigger(e);
        }
      }, false);

    //} // for each modal

  }; // end: a11yModal: function

var modallisting = document.querySelectorAll(modal);

for (var i = 0; i < modallisting.length; i = i + 1) {
  a11yModal( modallisting[i] );
}



} )( this, this.document );