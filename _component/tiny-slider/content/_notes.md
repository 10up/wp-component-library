The Tiny Slider component is based off the popular library [Tiny Slider 2](https://github.com/ganlanyuan/tiny-slider#fallback), it was chosen because it passed accessibility, performance, and quality tests. Therefore the [tiny-slider.js](https://github.com/ganlanyuan/tiny-slider/blob/master/dist/min/tiny-slider.js) file and [tiny-slider.css](https://github.com/ganlanyuan/tiny-slider/blob/master/dist/tiny-slider.css) file is necessary to use this component out of the box before customizing for your own use. Pikaday is also generally flexible enough with a strong API to accomplish most goals of any carousel you might encounter.

## Accessibility Notes

- Autoplaying will lead to less than desirable screen reader behavior
- Looping slides will make the "count" listed by screen readers behave abnormally
- Even though the slider out of the box passes WCAG 2.1AA you should still make sure to check your build to ensure that things like color contrast, and navigability still pass WCAG 2.1AA
