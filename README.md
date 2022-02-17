# @iconsauce/mgg-icons

This plugin scrapes Material Design Icons node module `@maggioli-design-system/svg-icons` icon library to make you use it with `iconsauce`:

This plugin scrapes **Maggioli SVG Icons** collected by [@maggioli-design-system/svg-icons](https://www.npmjs.com/package/@maggioli-design-system/svg-icons) which contains svg versions.

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/plugin-mgg-icons'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const Component = () => {

  const icon = 'mgg/adv-denied'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 mgg/logo-gpl tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="mgg/isbn"/>
      <span className='bg-adjust-tone-01/24 mgg/terminal'/>
      <div>
        <footer title="mgg/signpost"></footer>
      </div>
    </div>
  </section>
}
export default Component
```

This plug-in will generate only icons used:

```css
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,A...Z") format("truetype");
}

[class^="mgg/"], [class*=" mgg/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.mgg\/adv-denied::before { content: "\ea01"; }
.mgg\/isbn::before { content: "\ea02"; }
.mgg\/logo-gpl::before { content: "\ea03"; }
.mgg\/signpost::before { content: "\ea04"; }
.mgg\/terminal::before { content: "\ea05"; }
```
