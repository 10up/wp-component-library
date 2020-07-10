The modal dialog component is one that is frequently used in UI design and
popular enough to where we don't feel like we need to reinvent the wheel. After
an exhaustive search for a third party plugin that met all of our accessibility
and implementation requirements, we were able to settle on using
<a href="https://github.com/edenspiekermann/a11y-dialog">A11yDialog</a>. This
plugin is fully WCAG 2.1 compliant, lightweight, has a robust API, no
dependencies, and properly manages focus.

<strong>NOTE:</strong>
Due to a <a href="https://github.com/edenspiekermann/a11y-dialog/issues/89#issuecomment-426983208">current bug in Chrome</a> , we recommend using `<div role="dialog">` (or `<div role="alertdialog">` to <a href="https://github.com/edenspiekermann/a11y-dialog#usage-as-a-modal">make it behave like a modal</a>) rather than leveraging the native `<dialog>` element. The bug: when clicking outside the `<dialog>` in Chrome, it does not close as expected.


It also has <a href="https://github.com/HugoGiraudel/react-a11y-dialog">React</a>
and <a href="https://github.com/morkro/vue-a11y-dialog">Vue</a> versions we can
leverage for projects in those environments.
