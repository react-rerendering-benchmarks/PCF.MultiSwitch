"use strict";(self.webpackChunk_albanian_xrm_multi_switch=self.webpackChunk_albanian_xrm_multi_switch||[]).push([[908],{"./stories/MultiSwitchComponent.Checkboxes.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors.w,Default:()=>Default.g,Disabled:()=>Disabled.x,FixedHeight:()=>FixedHeight.E,Interaction:()=>Interaction,OptionsGroup:()=>OptionsGroup.g,Orientation:()=>Orientation.i,Visibility:()=>Visibility.E,default:()=>MultiSwitchComponent_Checkboxes_stories});var react=__webpack_require__("./node_modules/react/index.js"),defaultArgs=(__webpack_require__("./MultiSwitch/app.css"),__webpack_require__("./stories/defaultArgs.ts")),argTypes=__webpack_require__("./stories/argTypes.ts"),Default=__webpack_require__("./stories/MultiSwitch/Default.tsx"),Colors=__webpack_require__("./stories/MultiSwitch/Colors.tsx"),Disabled=__webpack_require__("./stories/MultiSwitch/Disabled.tsx"),FixedHeight=__webpack_require__("./stories/MultiSwitch/FixedHeight.tsx"),OptionsGroup=__webpack_require__("./stories/MultiSwitch/OptionsGroup.tsx"),Orientation=__webpack_require__("./stories/MultiSwitch/Orientation.tsx"),Visibility=__webpack_require__("./stories/MultiSwitch/Visibility.tsx"),Template=__webpack_require__("./stories/Template.tsx"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),delay=__webpack_require__("./stories/delay.ts");const Interaction=Template.Z.bind({});Interaction.parameters={controls:{include:["selectedOptions"]}},Interaction.play=_0=>{return __this=void 0,__arguments=[_0],generator=function*({canvasElement}){const canvas=(0,esm.uh)(canvasElement);for(let i=0;i<11;i++)yield(0,esm.X_)(delay.Z,{timeout:delay.V}),esm.mV.click(canvas.getAllByRole("checkbox")[i]);for(let i=0;i<11;i++)yield(0,esm.X_)(delay.Z,{timeout:delay.V}),esm.mV.click(canvas.getAllByRole("checkbox")[i])},new Promise(((resolve,reject)=>{var fulfilled=value=>{try{step(generator.next(value))}catch(e){reject(e)}},rejected=value=>{try{step(generator.throw(value))}catch(e){reject(e)}},step=x=>x.done?resolve(x.value):Promise.resolve(x.value).then(fulfilled,rejected);step((generator=generator.apply(__this,__arguments)).next())}));var __this,__arguments,generator};var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const MultiSwitchComponent_Checkboxes_stories={title:"Multi Switch Component/Checkboxes",argTypes:argTypes.P,args:(a=((a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a})({},defaultArgs._),b={controlType:"1"},__defProps(a,__getOwnPropDescs(b))),decorators:[Story=>react.createElement("div",{style:{margin:"2em",padding:"1em",maxWidth:"350px",border:"dotted 1px"}},Story())],parameters:{layout:"fullscreen",controls:{include:["checked"]}}};var a,b}}]);