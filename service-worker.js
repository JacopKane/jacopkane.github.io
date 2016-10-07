/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["fonts/064bf6d7-724b-4182-8b66-f2e9125c9c6e.eot","1fb0d38f7af1b1f2f704fecd8105cb3c"],["fonts/0869dafd-e433-4148-bc83-1c7819642387.svg","d4ce24e21dde1e1b070fbecd8bd6506a"],["fonts/18182694-d350-42bc-a00a-10e3670d590f.ttf","c45b6acb2805175742265ecffe58c5df"],["fonts/1c4a9259-aba1-4b26-99da-167399ccd516.eot","00abcbd7569c1280232a9215ca358afd"],["fonts/1d97ad64-e2b6-4551-be90-edb33d26ab26.woff2","d18761ff9732bc456c5f35da5fc0cda1"],["fonts/1ee9eb38-03f4-40b8-9cad-3f127f0a8e62.ttf","1ea879bbdabdf9c45c4c82b9b3a9cb91"],["fonts/24567192-78d1-4fcf-84be-05d88fafb457.woff2","89d9a2181b18323627b09732d8cdbb79"],["fonts/24a86e0b-0e16-478e-b1b6-fcefa5d8cf25.ttf","a2c5bca8048294827775f4eae5e9cd97"],["fonts/317168fd-e500-44ab-a340-5615696f53a2.svg","25a65cee5c4c28ccc8f66c23a13d9b52"],["fonts/34508d43-56ab-48bc-8027-0bdfcff3b98a.woff","059cbac2c7bab59d3e26d0e393850c9e"],["fonts/3b454eab-05ee-46da-954b-24cfb42655de.woff","07277822aa64ad1884ae34d6806d23d7"],["fonts/3b4da2ec-8e53-4b8d-bdec-714bbb02e076.eot","ad8f8ee7377a8f2e595981878402b52c"],["fonts/3bc5c864-8261-4437-9d41-4c9730a80cdc.woff2","744f649319f0f0940515485731dbb958"],["fonts/42dad980-6822-4538-b14d-24f7edc8bbc8.woff","456f4cbb0206b0323a1533e0a27d6b78"],["fonts/4721c5d1-d32a-4c98-b31c-c38dc4d7d4b6.woff","5b826712df3716faeedb528debcd72ed"],["fonts/4833d369-2466-4f20-90a2-2dc67da099cb.woff","bcc2d07f970310def3e6ceeea6c03116"],["fonts/570cc714-8bcd-4967-8577-7d6241b74883.ttf","c551678a746be1319ea5c4a8a28f3482"],["fonts/585f41e2-ba54-4be3-9bc3-7f4b43fa110d.ttf","b90cb617e51abfcca7378f3666964978"],["fonts/58af206c-4125-4ed1-964c-3f2a565c57b3.woff","a650a1e7de17e9a401e97e9a75c7726a"],["fonts/5a12306f-915e-4b7c-9bd9-ff80ed06180f.ttf","6a2d4ad18dc14e62d908fc9d8453f02a"],["fonts/608f7df5-8601-4459-953b-05f016b5440b.woff2","04caef00139364fed8f8fc5a938d44c0"],["fonts/62d8d56f-9c91-4630-bc2d-7292ede89483.svg","5f524ae35499837038f3e9c288fec335"],["fonts/684743b9-28ad-4425-bee0-84b18fe26304.woff2","c0149e1f1aed7a3b976b1798dc0aafb2"],["fonts/6a77c29b-2ff5-43d0-90f8-495d83004b3b.woff","f5b78fc54577c046248493eede4c7385"],["fonts/6f5e2651-f3c2-4e38-b6e3-5e72dc48898b.eot","57bda97b52f628aaeaee979b5e42d382"],["fonts/733857db-f09e-418e-92c8-5b7befdc90a1.woff2","108e2840f3546b6e5a90cc511d028ab5"],["fonts/771ff675-f76c-42b5-a29b-7be0bc7bb144.ttf","12cf83ee45552d3207c9e8d3dde84cca"],["fonts/802b9bb5-c701-4fca-92e6-db3015e59b7d.svg","6bd4a760ac0f35cb05615c5aa394a996"],["fonts/80a1e4c8-8358-4716-ad3c-c290bd447d7a.svg","872b6f11db8bef6a8f8beff48cdc3dac"],["fonts/811abd2d-f864-45de-9b52-debd132a8e55.svg","535c398f02ec9035506c6ace6b96c615"],["fonts/83391331-5543-43bd-9036-09f8594f2b33.eot","3ff2e495bd9e5434f76865d868c3a717"],["fonts/876b4e64-a7e7-4a78-bdc1-b354e720ce69.eot","f4b7658b1c34f8fd80c79ad5301722f7"],["fonts/8910643d-edba-40a7-9d06-d7e5f2d58267.eot","ed6235fb15379304e36f36bd0a719263"],["fonts/8c67e60b-8e8e-4afc-9f04-c103559ce97c.svg","962b835dc78023b987228ecd8decc21c"],["fonts/8eeb3590-25ac-4d03-b9cf-9a5a151e18d4.svg","6c805bf2c5f64c59285708e46de6f7da"],["fonts/948f0dca-ee24-4b8d-9d39-e6647e0c10bd.woff","8b9635e9b84364f26785ecd0cd4a2ace"],["fonts/952db4c4-b7dd-4a60-bdaf-18ac441fee68.svg","a7ad347cbf4e79ee7b55701f4a66e2d0"],["fonts/9b798c70-55d3-40d9-930b-b8bf15140fa5.woff2","dc4d4c1e45eec06d7c6b76bd352d4279"],["fonts/a280f523-3482-46ec-92ae-d0754bf8ec42.svg","3a57ed468e5dfb1f9e8ed2441688d851"],["fonts/a68bbb74-8dc7-49e4-b715-ee9d2191db62.woff2","9c1040ed236de7d73082b680503b150b"],["fonts/ac693bbd-b70d-4c84-aa72-785527e83445.svg","fe85b59357938d9f0c813d870f861d93"],["fonts/b5fd9d18-b2dc-4f4f-9050-68ea7172956c.eot","c6c410478727848b381035ce36676f82"],["fonts/c3d3aab3-17a6-4d12-acfe-50d926275731.ttf","159afdd3bb640d264179624f94e442f3"],["fonts/c3e8f4a5-d09a-4b13-b013-1507a2be977d.ttf","6e64030bac7eaef65d9cbde4a349572a"],["fonts/c729c594-aaa8-40c8-bb7b-e22095026114.woff2","56de59fa78f03b7f1a531bef76dc21d1"],["fonts/c81d0a2e-0ce5-4c19-9d4c-c7cab5e373b2.svg","92f66a1cd4413cbe264263fb5de4f857"],["fonts/c84d6940-7b48-4056-8835-c0b30e63d246.eot","20a8b654b768f946f66ae0ac1bb1d8ad"],["fonts/ca56d6a6-ea85-41be-9dcf-c6a2d419e03a.eot","1e660a711387c9c3bb83a3d96050138a"],["fonts/caef1298-748a-48f2-9338-27f3bddcee89.woff","fa2e3f7dbd0cf96166a02d7d870beaa5"],["fonts/ce849112-fea8-4723-ae38-3a0f2ce6eaa8.woff","b02b43b429a0cbcc1a1d8c6400583297"],["fonts/cf541a6e-1ef1-4303-a114-ea9560e7c3dc.ttf","86009fc14afffd8bf383fc596fded8d8"],["fonts/d0256a34-2988-45d7-8093-104216fc319d.woff","ae709b5e0a49f03d635ddbcf80658d4a"],["fonts/d5e38cca-491f-4b1e-9877-876743c50258.woff","13303a213510cb65b7b9a0d113021449"],["fonts/da37f530-b57a-4972-a790-74eb04347d50.woff2","8fbfcd8ccc76877b86c6157dcd35e959"],["fonts/dc599214-8fb0-45bc-857b-774c98893c2e.woff","65ad61e059d44a3e45da1cfa5d961b44"],["fonts/defe4f4f-2a42-45c8-9b16-3afbd040f231.eot","30d6b44c043223197c3d55be98b9e1fa"],["fonts/e1df2433-a7d4-4c15-ad3d-ad9992dd1e9a.woff2","b990a94d1451df88307984fac0067d68"],["fonts/e7fbbd4c-e948-49c8-b9b4-32b24abc4abf.eot","0e3ca46639916ac7ba2db8f05274a901"],["fonts/e8d8902e-4597-488e-adb1-8cdd3ae0a63b.ttf","dcc2baaafcecd295a66338e0886fee1f"],["fonts/ee106998-613e-4bcb-b433-40f757862854.ttf","e499a2ead2908d02cdb970647e4cfe30"],["fonts/ef5fdc47-dd49-4d8f-bde6-a835e955f21e.svg","bb6aec6a044f5249b6033be76faa14eb"],["fonts/ef65dcdb-9555-4ccb-9414-2d839073053e.svg","ba83cc5d20fd22c180261d8e2cf25d3a"],["fonts/f02778c3-2dfe-4852-a53c-ac2315225d46.eot","22257600b31d04b1aa036983fb39f0c4"],["fonts/f211b78a-fd4d-4434-8188-d7d641c533da.woff2","4f2ae51c72c6a82cadd60ec6f5ab7f34"],["fonts/f2aa8ca9-2ed7-4360-b91f-03440db255e0.eot","4bebea72169b23d8255e9a824a9c85bd"],["fonts/f50ac13c-e829-42c2-b7a8-8f0ecbbe1105.ttf","bb7eed4022dea8a8476fd2b82cd48a4c"],["fonts/fdb8d9a1-706a-43f1-9b12-5e87cea644a3.woff","45fb91a48cbe7937c2dfebfdbfbb5ee1"],["fonts/fdd4f182-f968-42fa-a72c-744f3ff27bc8.woff2","e681c4a5f8db2dfe61d823d6f3b67be4"],["fonts/fdf8765b-9cb8-483b-b5c3-1cc7146fb54f.woff2","3457de5c262911ef1b742f0b411b61ad"],["fonts/fed2d287-5d32-4e18-9d77-dea82f232e57.ttf","395cad794177ee72a059db112a2d31f3"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/logo.small.png","76fadf88d01801f69b3c0dbaef17fac0"],["index.html","4e0579efaeee32a50dd4f3216f9578cd"],["resume-dist.html","562ce7648ecc51c20a0b6ce05de5f91c"],["resume-doc.html","63e226957882601cc616033088e692a0"],["resume.html","a4ec054dfe6e769ee9cfa493778c65bd"],["scripts/main.min.js","ab436a4e3bedfbee2e47b92b685e8e1e"],["styles/common.css","a268a73f01c175408b4b5f4c9ad5cae6"],["styles/fonts-async.css","38c0fe7e55ddc642832810f145101a88"],["styles/fonts.css","47fcf371bc8dfc7e06b6aaa3b3b91689"],["styles/main.css","15ded05799ac02c802bf19832b0188b1"],["styles/resume.common.css","c67fce449f95fcb81857df91f8a11b07"],["styles/resume.css","f3d129141d3bb0f167275fb5a8c83908"],["styles/smart-underline.css","5016caf8c9621724e6a213745149d458"],["vendor/font-awesome/css/font-awesome.css","cdaa4976f0b720f4269c153a15b75946"],["vendor/font-awesome/css/font-awesome.min.css","819e902a13e4b3b21c37627943a09f74"],["vendor/font-awesome/scss/font-awesome.css","67d4d1dc533f28f2a4d7d3fb007bb5d2"],["vendor/modernizr-custom.js","1576f77bff753783919fb7e353b01bca"],["vendor/modernizr/Gruntfile.js","dd07a74851b5557494ae2d0056eb9168"],["vendor/modernizr/feature-detects/a/download.js","251833912458f87f1d8b01f067ac189d"],["vendor/modernizr/feature-detects/ambientlight.js","bacd6ae58bc6d78e909828fe605cd9e1"],["vendor/modernizr/feature-detects/applicationcache.js","ef548a7c3ac29cd5dd04f25029d892e8"],["vendor/modernizr/feature-detects/audio.js","d9362106acb15b74d534866a3f43b7b9"],["vendor/modernizr/feature-detects/audio/loop.js","6cc8ccbbb41f4b8a4718895b6fd2b544"],["vendor/modernizr/feature-detects/audio/preload.js","25086b679eb56ddee775cd525fd7b1c9"],["vendor/modernizr/feature-detects/audio/webaudio.js","c403dc6eadb1ecbb4173cc9bffcb3d69"],["vendor/modernizr/feature-detects/battery.js","a0e22284b814a9f0da8cc991db6cb521"],["vendor/modernizr/feature-detects/battery/lowbattery.js","2b71f57c25d219020410d54dda0c9146"],["vendor/modernizr/feature-detects/blob.js","1ace8a5a751a23f92efda33722ee04b1"],["vendor/modernizr/feature-detects/canvas.js","201f0f5010e05b9034b95f04c11876c5"],["vendor/modernizr/feature-detects/canvas/blending.js","4f0bdfdbae394c1057cf5a28285f37d2"],["vendor/modernizr/feature-detects/canvas/todataurl.js","62af8b359eb8ec97c4b18b8fb89bc328"],["vendor/modernizr/feature-detects/canvas/winding.js","d0345e9f6a43f9558b23ff7504fcad2a"],["vendor/modernizr/feature-detects/canvastext.js","0473a3cf8115b5b2d98e38b62f871bc9"],["vendor/modernizr/feature-detects/contenteditable.js","009c04c7c16a872be321cf2f2902cc0a"],["vendor/modernizr/feature-detects/contextmenu.js","8397f64cf8370a53d78dfe63a5e4e419"],["vendor/modernizr/feature-detects/cookies.js","4169dabc7d1d4904e23759e1534df8f9"],["vendor/modernizr/feature-detects/cors.js","d69c2ac871eb747f2a9d0f4357e95b2b"],["vendor/modernizr/feature-detects/crypto.js","5266e162ec1ff23be5b492c911d2a1d6"],["vendor/modernizr/feature-detects/crypto/getrandomvalues.js","8351d4e03bd92f09e0cb33930957e7e3"],["vendor/modernizr/feature-detects/css/all.js","bba90b4c2216d21787795a7cecdd9b63"],["vendor/modernizr/feature-detects/css/animations.js","a1ffc582138b4b2cf626ec3de8401536"],["vendor/modernizr/feature-detects/css/appearance.js","22ac09311a6a6532473e012b5d75f050"],["vendor/modernizr/feature-detects/css/backdropfilter.js","9d5131b424da23cfb53a4d2bd11808a2"],["vendor/modernizr/feature-detects/css/backgroundblendmode.js","76bd1ec7be5f4691f8f0dd5d80bf4294"],["vendor/modernizr/feature-detects/css/backgroundcliptext.js","7a808ec4fabac27fa4680af05003f451"],["vendor/modernizr/feature-detects/css/backgroundposition-shorthand.js","7549ef9bd61970592cf6e06244076d68"],["vendor/modernizr/feature-detects/css/backgroundposition-xy.js","3366c8110fd6b9b78480161b71056c27"],["vendor/modernizr/feature-detects/css/backgroundrepeat.js","87b18f058a90d744415ea1ddb9ed8d5c"],["vendor/modernizr/feature-detects/css/backgroundsize.js","19fa8af94b6c929461292c00a4d0e36c"],["vendor/modernizr/feature-detects/css/backgroundsizecover.js","6754b59754ecf0fcf4876c82335e20ec"],["vendor/modernizr/feature-detects/css/borderimage.js","cbe03ff81ae15d67641f0d93d749a13a"],["vendor/modernizr/feature-detects/css/borderradius.js","f8103433533064d80c03fdffc5878304"],["vendor/modernizr/feature-detects/css/boxshadow.js","ff487df64884468288c67ad7619eee36"],["vendor/modernizr/feature-detects/css/boxsizing.js","f778744b50afff138a840d957347fcba"],["vendor/modernizr/feature-detects/css/calc.js","fe24388369948b8ce72c3bf0fec93c7d"],["vendor/modernizr/feature-detects/css/checked.js","0898620c509c1e892ae682d9be3b087b"],["vendor/modernizr/feature-detects/css/chunit.js","cf6d8c57623315842f1144dda07164e5"],["vendor/modernizr/feature-detects/css/columns.js","19c018e3d6bc3dff7f607debe81edc0b"],["vendor/modernizr/feature-detects/css/cubicbezierrange.js","4b7b95594c96ba66abc1752e2c70f9d3"],["vendor/modernizr/feature-detects/css/displayrunin.js","5c4bd7a02bd38ed77d61e98e9d6c95f4"],["vendor/modernizr/feature-detects/css/displaytable.js","71b1c43c64556a36ec935facd830470d"],["vendor/modernizr/feature-detects/css/ellipsis.js","21427ad21e71f93bd6a642cfd8ea790f"],["vendor/modernizr/feature-detects/css/escape.js","f9ff82747bd4a7a2f6fdb6f149d6419d"],["vendor/modernizr/feature-detects/css/exunit.js","edb87db23ce7edd8d0c1f50a92e27486"],["vendor/modernizr/feature-detects/css/filters.js","26e1adfa59b7872e2a1cc7c4fb393e79"],["vendor/modernizr/feature-detects/css/flexbox.js","f50ca2bb55eb82b06be56229dab7a5a4"],["vendor/modernizr/feature-detects/css/flexboxlegacy.js","772b0e5653bcc8cb6bb4ec55b5f4e831"],["vendor/modernizr/feature-detects/css/flexboxtweener.js","79220f6c494af190831236d01f515f6a"],["vendor/modernizr/feature-detects/css/flexwrap.js","db75bfc18d9b842937ed59556e0edacc"],["vendor/modernizr/feature-detects/css/fontface.js","5d7187815ac42bc057380456c51ebab6"],["vendor/modernizr/feature-detects/css/generatedcontent.js","fbc141f78beb299080134aaee2a48ebf"],["vendor/modernizr/feature-detects/css/gradients.js","09c09af57f85a4f6687d29320fc49bf9"],["vendor/modernizr/feature-detects/css/hsla.js","2ac050e953b98e4d795363b9f74c3d35"],["vendor/modernizr/feature-detects/css/hyphens.js","3f69962905f86b3e984a05f552701780"],["vendor/modernizr/feature-detects/css/invalid.js","8c3833f79a20a6928c55a263427e31ab"],["vendor/modernizr/feature-detects/css/lastchild.js","e1ed2fac6314ed889c74d634c4a1b834"],["vendor/modernizr/feature-detects/css/mask.js","93fe260418f0e099afda01cd411537f4"],["vendor/modernizr/feature-detects/css/mediaqueries.js","260e0f3e44b0738f511c960e846b29ed"],["vendor/modernizr/feature-detects/css/multiplebgs.js","fca28d568654e6ff7358258d8efaf8d0"],["vendor/modernizr/feature-detects/css/nthchild.js","b448b8089f1571d7020e48fe63aca70c"],["vendor/modernizr/feature-detects/css/objectfit.js","3ed42adb66fa54a0fd53cb13807ce6bf"],["vendor/modernizr/feature-detects/css/opacity.js","9eb8bbaefe3ae2671abbd99e5a6f2a80"],["vendor/modernizr/feature-detects/css/overflow-scrolling.js","140482befd34e584d0aac026d0f26064"],["vendor/modernizr/feature-detects/css/pointerevents.js","fa2824acffcaf4cd581c1b5e93ffd63e"],["vendor/modernizr/feature-detects/css/positionsticky.js","47a766046af72ccdf03e70644e3f22dc"],["vendor/modernizr/feature-detects/css/pseudoanimations.js","b6a9d58e67bac82d9e24988f271f82aa"],["vendor/modernizr/feature-detects/css/pseudotransitions.js","6f0512742d16a0bdb660816104bebbee"],["vendor/modernizr/feature-detects/css/reflections.js","2a7d9203c90322d27a75ef9d4f16b117"],["vendor/modernizr/feature-detects/css/regions.js","d646f53733684889b15ab5eae9188239"],["vendor/modernizr/feature-detects/css/remunit.js","62e425f72c6421d8c9cdea0ba5a554ce"],["vendor/modernizr/feature-detects/css/resize.js","b43cedd698a29c44286f1e73a1d71b71"],["vendor/modernizr/feature-detects/css/rgba.js","8ca70174f2b0575c8a2f793cfafdabc1"],["vendor/modernizr/feature-detects/css/scrollbars.js","e65bb8a27d4b355f4fd74502ef4da1fc"],["vendor/modernizr/feature-detects/css/shapes.js","47d69d6df93f4239d5a4153469bb194f"],["vendor/modernizr/feature-detects/css/siblinggeneral.js","1d7126217d0808e6e9d717c843cb2002"],["vendor/modernizr/feature-detects/css/subpixelfont.js","c14d568284bbe926bf2c05b7264f4d9b"],["vendor/modernizr/feature-detects/css/supports.js","960ba4ded23c27aa00e4bf0b55002a33"],["vendor/modernizr/feature-detects/css/target.js","dcdaebaa8036ed51dd964d29e99558f4"],["vendor/modernizr/feature-detects/css/textalignlast.js","002ee3af070432afb032f2f52b563880"],["vendor/modernizr/feature-detects/css/textshadow.js","beb0fbdc731abefa1782627cec474276"],["vendor/modernizr/feature-detects/css/transforms.js","f3ab4028a208762a0d91cb71034713b2"],["vendor/modernizr/feature-detects/css/transforms3d.js","9747ad2e0639bb379343bbdf7aeec7ef"],["vendor/modernizr/feature-detects/css/transformstylepreserve3d.js","22e851e71a6f9ef5fce83b3a92481be6"],["vendor/modernizr/feature-detects/css/transitions.js","dc5fb238a482c721840f340abd4b3e1e"],["vendor/modernizr/feature-detects/css/userselect.js","7875a80bb058f543092e160bbd04f746"],["vendor/modernizr/feature-detects/css/valid.js","f55063c73c9d9542e91b41f4bf82c81f"],["vendor/modernizr/feature-detects/css/vhunit.js","eb29ac9ca31e539ea19c2dbf960574f6"],["vendor/modernizr/feature-detects/css/vmaxunit.js","9a8fbe3be213ebfec316e1816a72aa10"],["vendor/modernizr/feature-detects/css/vminunit.js","06e20b789f240d0e1cbcc4f510f440ae"],["vendor/modernizr/feature-detects/css/vwunit.js","a9a85759ed6c64f7b8ce30417709db8d"],["vendor/modernizr/feature-detects/css/will-change.js","dd822af03eaa766bed6dbf264c4d2c6c"],["vendor/modernizr/feature-detects/css/wrapflow.js","d8ffd70053386a5b770d8218799a7652"],["vendor/modernizr/feature-detects/custom-protocol-handler.js","36f2775d3d1c3a2aedf7b562f9dfb889"],["vendor/modernizr/feature-detects/customevent.js","b705cef0ea20cd72d53604929eb93e88"],["vendor/modernizr/feature-detects/dart.js","822bd2d1ede5c21fa3e939c5cb4dc157"],["vendor/modernizr/feature-detects/dataview-api.js","7859a905214dca79131b6ce39a8304fb"],["vendor/modernizr/feature-detects/dom/classlist.js","571e1858eb6f99e9e555401976b794f4"],["vendor/modernizr/feature-detects/dom/createElement-attrs.js","1f480f15e36b5d69afb2bb70c82adcd4"],["vendor/modernizr/feature-detects/dom/dataset.js","5f1ddf26bcd341a9de0fb827ee2bc145"],["vendor/modernizr/feature-detects/dom/documentfragment.js","1e13754e5d1bf55e8cdfb23c7d99e5e6"],["vendor/modernizr/feature-detects/dom/hidden.js","17fa8f031feb52f481799f1db4f9d282"],["vendor/modernizr/feature-detects/dom/microdata.js","aa3ef22c6130c6f661808cba5c6314cf"],["vendor/modernizr/feature-detects/dom/mutationObserver.js","bea68e69a0ee849aeedca859ca75ab9a"],["vendor/modernizr/feature-detects/elem/bdi.js","b348fe59860aa0db67f7411718002a9d"],["vendor/modernizr/feature-detects/elem/datalist.js","e9698057a93712e53a99fbd1c1b6f026"],["vendor/modernizr/feature-detects/elem/details.js","df3d0dea96be05632c0deac43a6e7f1b"],["vendor/modernizr/feature-detects/elem/output.js","2dc47a7fe8e295b1a88d49494267fb4e"],["vendor/modernizr/feature-detects/elem/picture.js","53e43e7067919fea7210dba3c8cb16df"],["vendor/modernizr/feature-detects/elem/progress-meter.js","0d3c4b69dae9c2070311f0dde9b577c0"],["vendor/modernizr/feature-detects/elem/ruby.js","6cb310fa5b5677c3af9693734a80f0f2"],["vendor/modernizr/feature-detects/elem/template.js","c9187dde840cbad88da167d5ad6d7d14"],["vendor/modernizr/feature-detects/elem/time.js","263b2f0e105ef97cbf9703b8c74a400d"],["vendor/modernizr/feature-detects/elem/track.js","2c70cfb4048ffd2a7f7dd910b3f69b8c"],["vendor/modernizr/feature-detects/elem/unknown.js","d420bb3845820df0ad9e9c3f47283e25"],["vendor/modernizr/feature-detects/emoji.js","bd684f9bdfd4d8b3b6e8e1a3f0b8c63c"],["vendor/modernizr/feature-detects/es5/array.js","931ec840bec6aefec715f3b42e252daf"],["vendor/modernizr/feature-detects/es5/date.js","e17dd00a60402a54b353b34db4cc484d"],["vendor/modernizr/feature-detects/es5/function.js","c7dcbe091872a2c5c0532f80030f487f"],["vendor/modernizr/feature-detects/es5/object.js","2aec770bd74f737fd59149626f94ab2a"],["vendor/modernizr/feature-detects/es5/specification.js","3eb21f787b94d455bafec787f856661b"],["vendor/modernizr/feature-detects/es5/strictmode.js","1eff40af1f87293eca839c7e37e7196e"],["vendor/modernizr/feature-detects/es5/string.js","929884b0ff6764784ddc71865db29c10"],["vendor/modernizr/feature-detects/es5/syntax.js","aef9ed2afdd7cb4e043b49935ee116f2"],["vendor/modernizr/feature-detects/es5/undefined.js","4b682dcb84a1ac4f3f9875c2bfc1a111"],["vendor/modernizr/feature-detects/es6/array.js","a0865ff3c805b85c98b50efe4402dea0"],["vendor/modernizr/feature-detects/es6/contains.js","0d7f650abcf44cc272a04d501047bf80"],["vendor/modernizr/feature-detects/es6/generators.js","38245247fbd1351150020283aa84a731"],["vendor/modernizr/feature-detects/es6/math.js","94f3e17b1edd880093c09ae5cdbaea80"],["vendor/modernizr/feature-detects/es6/number.js","b230c59a1188968ea20e0bdc61340618"],["vendor/modernizr/feature-detects/es6/object.js","67f5cff42cb7c7e8cece15f0d1b20600"],["vendor/modernizr/feature-detects/es6/promises.js","c696f0440d28695764364acd665c7f5a"],["vendor/modernizr/feature-detects/es6/string.js","506771ce53ebac053542ea33d09ba99e"],["vendor/modernizr/feature-detects/event/deviceorientation-motion.js","2ec3ee67ba179993aa3f473671e83d85"],["vendor/modernizr/feature-detects/event/oninput.js","9a69807ac43aebc91880ec3334608562"],["vendor/modernizr/feature-detects/eventlistener.js","d93e35ce21bc0ad885cab7e3b9386e4d"],["vendor/modernizr/feature-detects/exif-orientation.js","407a953f8dfcf546556aedaa9c17c996"],["vendor/modernizr/feature-detects/file/api.js","6e31ce2dc1c53847e2ac92ad8b429648"],["vendor/modernizr/feature-detects/file/filesystem.js","0f878fefedd3f3e77247730fedcd54a0"],["vendor/modernizr/feature-detects/flash.js","3751e11de92d6f76adf2af4bc4b91e1b"],["vendor/modernizr/feature-detects/forms/capture.js","2bab7251281edc244eb38e1ad8ab2388"],["vendor/modernizr/feature-detects/forms/fileinput.js","2579ac5534fc1ebe19b2f3cfbd9a1a01"],["vendor/modernizr/feature-detects/forms/fileinputdirectory.js","f72077222a99205ec01ea301a1408122"],["vendor/modernizr/feature-detects/forms/formattribute.js","216211da7add5cf72bdc7a58c51cf60c"],["vendor/modernizr/feature-detects/forms/inputnumber-l10n.js","4dabc891251f21e337bbadf0470fd4aa"],["vendor/modernizr/feature-detects/forms/placeholder.js","abe2130bc1fe13ce103469a8e1e95411"],["vendor/modernizr/feature-detects/forms/requestautocomplete.js","b0b432ca5a1af62bbc9aaee1c3ca06fa"],["vendor/modernizr/feature-detects/forms/validation.js","63d633d38df47481db53027b3797195a"],["vendor/modernizr/feature-detects/fullscreen-api.js","771e7d84bfdfdf6c8ffce15418c0312f"],["vendor/modernizr/feature-detects/gamepad.js","ee2ad085fef3482ff2e3ed6a23b8287f"],["vendor/modernizr/feature-detects/geolocation.js","f753f347cf018ea5d83dcf229fe2c557"],["vendor/modernizr/feature-detects/hashchange.js","3dc921685a0b5fdef7f28b7b877ac9b4"],["vendor/modernizr/feature-detects/hiddenscroll.js","e2aed8ab250da0c5f3bf21669dd216f0"],["vendor/modernizr/feature-detects/history.js","ce22bed9002da59f64808eda18660462"],["vendor/modernizr/feature-detects/htmlimports.js","c4511f4b307088bf441d38d2fd043018"],["vendor/modernizr/feature-detects/ie8compat.js","294a83d93959d24985b7635fed268d12"],["vendor/modernizr/feature-detects/iframe/sandbox.js","93a5d7bb25c8226381d1f272a7ad6b24"],["vendor/modernizr/feature-detects/iframe/seamless.js","061db5e11bcc967d978de3a0d5278ab3"],["vendor/modernizr/feature-detects/iframe/srcdoc.js","6b996973cf92cefd5935a6cfa73cb6c1"],["vendor/modernizr/feature-detects/img/apng.js","fbfe1ae4afba9ba856542b10646bd2c9"],["vendor/modernizr/feature-detects/img/jpeg2000.js","3d51aff0d4d1df3de731c025ce9c79ce"],["vendor/modernizr/feature-detects/img/jpegxr.js","ed6bc296a333d75a8e49a86d28b51d48"],["vendor/modernizr/feature-detects/img/sizes.js","fae20538b6f572565749d9a88e676961"],["vendor/modernizr/feature-detects/img/srcset.js","e8ba72c7bc61a8b564fda09c7aa36209"],["vendor/modernizr/feature-detects/img/webp-alpha.js","6ad2954be74ef219c64eebc7f972486d"],["vendor/modernizr/feature-detects/img/webp-animation.js","8f05a357312f7132235f21842da672bf"],["vendor/modernizr/feature-detects/img/webp-lossless.js","488e21caa2ea6c8005e11fd0e13b1e09"],["vendor/modernizr/feature-detects/img/webp.js","341aaf4a611074bb3653a77919106f36"],["vendor/modernizr/feature-detects/indexeddb.js","246b00117edc1132e35582fdaecb5e14"],["vendor/modernizr/feature-detects/indexeddbblob.js","afc477db08b1b3a4badfb6eefa36495d"],["vendor/modernizr/feature-detects/input.js","deeb5ff48b45956e48cefdf0f962f257"],["vendor/modernizr/feature-detects/input/formaction.js","d0d99946a620a63b970742b27d075e71"],["vendor/modernizr/feature-detects/input/formenctype.js","94b5dc21ca4c069e644627394fc3e27a"],["vendor/modernizr/feature-detects/input/formmethod.js","60dc46404b7e692048201764ac058f8a"],["vendor/modernizr/feature-detects/input/formtarget.js","e1c674abcc2471fbf32a8b138f17a854"],["vendor/modernizr/feature-detects/inputsearchevent.js","51166a151aebdff27f60a8609a763ec5"],["vendor/modernizr/feature-detects/inputtypes.js","e8cbf7c11071fa3ccb2525582c4bc601"],["vendor/modernizr/feature-detects/intl.js","b4c2fabdaf437525cb0931c18c84d9bd"],["vendor/modernizr/feature-detects/json.js","00badc632fbf7847a3413356c3b5df28"],["vendor/modernizr/feature-detects/lists-reversed.js","217c6339cbbc56d6f37dbe3f8d937b97"],["vendor/modernizr/feature-detects/mathml.js","62c24da366de3aee961522d1569bcec6"],["vendor/modernizr/feature-detects/network/beacon.js","064ff455e9830f6760574945986b3a96"],["vendor/modernizr/feature-detects/network/connection.js","27c6c9c4452116961dbe615e1fd1aafa"],["vendor/modernizr/feature-detects/network/eventsource.js","73fff66f475a86e19d0bfb752e5f13fc"],["vendor/modernizr/feature-detects/network/fetch.js","20235428e454771a5af4791fb4bcb05b"],["vendor/modernizr/feature-detects/network/xhr-responsetype-arraybuffer.js","c82190ad62f8cfd3684317e3e6bed83f"],["vendor/modernizr/feature-detects/network/xhr-responsetype-blob.js","c67e6550cabd4e0bc109cb9627fa96c2"],["vendor/modernizr/feature-detects/network/xhr-responsetype-document.js","7e71b1cc2959faf275a5fcad53ce9934"],["vendor/modernizr/feature-detects/network/xhr-responsetype-json.js","454411cdd1c87a52b45743a06f8e5fe8"],["vendor/modernizr/feature-detects/network/xhr-responsetype-text.js","60eb1564056d2b6a491cf53fcca5e288"],["vendor/modernizr/feature-detects/network/xhr-responsetype.js","ebfc93b07f35e38250b00e847df42842"],["vendor/modernizr/feature-detects/network/xhr2.js","0c7aba2be208faed1ac389c182b57811"],["vendor/modernizr/feature-detects/notification.js","f61b3419f72d33a8482df72a558b5a31"],["vendor/modernizr/feature-detects/pagevisibility-api.js","8c78538d2ed4b71f510c35dfa7e755f5"],["vendor/modernizr/feature-detects/performance.js","38e477c13ca35638286895904f846bbe"],["vendor/modernizr/feature-detects/pointerevents.js","44744b40f2586082459e15ecc43c53da"],["vendor/modernizr/feature-detects/pointerlock-api.js","6a98919876251508d453f1321c340563"],["vendor/modernizr/feature-detects/postmessage.js","bab878676134761202cf373753e7aad6"],["vendor/modernizr/feature-detects/proximity.js","803ded48676c1d18de49915a3640b45a"],["vendor/modernizr/feature-detects/queryselector.js","7485a2db78314d1030961e1154ae744b"],["vendor/modernizr/feature-detects/quota-management-api.js","53e590a43cc75f8731f9bf7132f4d219"],["vendor/modernizr/feature-detects/requestanimationframe.js","bbbeafb5ab926b4fcc2e0a5601fc888a"],["vendor/modernizr/feature-detects/script/async.js","c9ae076aa0e8952ba74aff7a627f24d6"],["vendor/modernizr/feature-detects/script/defer.js","cef0a10fbd0db8ff39d25d8d549ddd4e"],["vendor/modernizr/feature-detects/serviceworker.js","7a5bd62d4c0640ce2010f35f50256647"],["vendor/modernizr/feature-detects/speech/speech-recognition.js","bce4f0205425bcbff3f441589ff25dd2"],["vendor/modernizr/feature-detects/speech/speech-synthesis.js","6d70d4d7ea2ff08db3e5ac07ba52910f"],["vendor/modernizr/feature-detects/storage/localstorage.js","bd14490d867c829fe3b0ca2a202b8a79"],["vendor/modernizr/feature-detects/storage/sessionstorage.js","14473afb34af28179aff0460ea2bbda2"],["vendor/modernizr/feature-detects/storage/websqldatabase.js","5e307b79caa3c317e16526753a66ca17"],["vendor/modernizr/feature-detects/style/scoped.js","cad5488e26a381d10d5e21f93dd567b2"],["vendor/modernizr/feature-detects/svg.js","c4f00e1e654cc39b83e45ceae319d2f2"],["vendor/modernizr/feature-detects/svg/asimg.js","f954632f348dccedd279f42cd7cca5ff"],["vendor/modernizr/feature-detects/svg/clippaths.js","c76e599bc753c71256af51c5f3c85d5e"],["vendor/modernizr/feature-detects/svg/filters.js","70734750e6a21ea7307f3157d900b1d6"],["vendor/modernizr/feature-detects/svg/foreignobject.js","3d5226bac4bb3106a40fa5a23ab938f8"],["vendor/modernizr/feature-detects/svg/inline.js","8c3e432161b0c653a9cd6a58f3ac4de1"],["vendor/modernizr/feature-detects/svg/smil.js","bc19ae7eb4461753d82065e0964aba53"],["vendor/modernizr/feature-detects/templatestrings.js","4bb99cf9964e609a88f2c987cebde707"],["vendor/modernizr/feature-detects/textarea/maxlength.js","0c809b7827a47e3b1fa75962123e0b4b"],["vendor/modernizr/feature-detects/touchevents.js","01294668692046175bcb8a1dab837eb0"],["vendor/modernizr/feature-detects/typed-arrays.js","8ca13fd252d73571bb76fb3bff901858"],["vendor/modernizr/feature-detects/unicode-range.js","0f41586babe54177ae1234e796f3172f"],["vendor/modernizr/feature-detects/unicode.js","ade3179cc9f35014c475d4b91eee01f3"],["vendor/modernizr/feature-detects/url/bloburls.js","1846a9a7ce72f03465a57a3e390c5ecf"],["vendor/modernizr/feature-detects/url/data-uri.js","7bc59e2ad9bd62275518eab77aa14228"],["vendor/modernizr/feature-detects/url/parser.js","cba42048349e765a0e3cbb3a67d5e3e4"],["vendor/modernizr/feature-detects/userdata.js","ff005ee06eefc5afcfd49a0b848e2ef6"],["vendor/modernizr/feature-detects/vibration.js","3a117d7414e108fc28c81bc7a68180f7"],["vendor/modernizr/feature-detects/video.js","d2b39a478b553fc2939550e036c0ad80"],["vendor/modernizr/feature-detects/video/autoplay.js","c5e4cf6a80bba056c608df44132fbdfa"],["vendor/modernizr/feature-detects/video/loop.js","bc3359752e2dcdadd664152de08a7592"],["vendor/modernizr/feature-detects/video/preload.js","8a6e8e9c22b648e5de41e306c26d9dc7"],["vendor/modernizr/feature-detects/vml.js","cf0529936dffc840e5a9a8bbf433e5a2"],["vendor/modernizr/feature-detects/web-intents.js","4756f4779b43916c0e8e2b8ec85bf393"],["vendor/modernizr/feature-detects/webanimations.js","5e21f7baf47f8542a91bd68a4e376510"],["vendor/modernizr/feature-detects/webgl.js","d504df7fd93ea29a78f7de7babecec36"],["vendor/modernizr/feature-detects/webgl/extensions.js","0f2c297297b228571a2e07933f52c678"],["vendor/modernizr/feature-detects/webrtc/datachannel.js","c5f50860e0cd20a7a65e68c79b782684"],["vendor/modernizr/feature-detects/webrtc/getusermedia.js","fb4f57c3bff2426874ee81971031832b"],["vendor/modernizr/feature-detects/webrtc/peerconnection.js","81be3f7e905f6a94ce9d2179c1a56791"],["vendor/modernizr/feature-detects/websockets.js","aa2d3693a1608711c5d5f53afaaf6003"],["vendor/modernizr/feature-detects/websockets/binary.js","450a560a423ea3270a96c0d69ddf4db6"],["vendor/modernizr/feature-detects/window/atob-btoa.js","773ec44d835d607a2bf4b7c7f9ee454a"],["vendor/modernizr/feature-detects/window/framed.js","5221fa4de14df6b5ed46e302e5bba307"],["vendor/modernizr/feature-detects/window/matchmedia.js","5f52d749a5bd2350bd43a3319674c514"],["vendor/modernizr/feature-detects/workers/blobworkers.js","3faf1b2306d06b9841d1897f393083fe"],["vendor/modernizr/feature-detects/workers/dataworkers.js","fc68cd3163b2eeab007ca0ea9950355c"],["vendor/modernizr/feature-detects/workers/sharedworkers.js","b81d726cf5a70734cf0addce506b049f"],["vendor/modernizr/feature-detects/workers/transferables.js","22696c9bbd62eb62274532327ef40f54"],["vendor/modernizr/feature-detects/workers/webworkers.js","9386c4d3c37894144cd1e0346bfaab7f"],["vendor/modernizr/feature-detects/xdomainrequest.js","92fb573167fa2d325a3837c6a2fb9c3c"],["vendor/modernizr/lib/build-query.js","6f915e8463ef00dc7c4f69028b07b189"],["vendor/modernizr/lib/build.js","9ffb37ceff949cd4a65dbcb7fee6c3bf"],["vendor/modernizr/lib/cli.js","e1126bc7ae020a1b3fe83b1319d17841"],["vendor/modernizr/lib/generate-banner.js","2fd2e34a200e3f0f51a407afff6793a5"],["vendor/modernizr/lib/metadata.js","59da5657a7f137d96951cb22636a797c"],["vendor/modernizr/lib/options.js","925402ebde3e6598315db900eb0424c1"],["vendor/modernizr/src/Modernizr.js","2696c0906e75422635532c1034d3f479"],["vendor/modernizr/src/ModernizrProto.js","695a76d17c9f5e24633d9d17a3b56e67"],["vendor/modernizr/src/addTest.js","baa43cc708badc0af76ae6d0580728ed"],["vendor/modernizr/src/atRule.js","2872c62b3de3eda377f9c862ac3cf76a"],["vendor/modernizr/src/classes.js","e151a567d32d510b16d33f6c197b01d4"],["vendor/modernizr/src/contains.js","2b0d8b6d6571fd7473ca0293232374c0"],["vendor/modernizr/src/createElement.js","169ce4d5cc61326f23c49e89fdf8f562"],["vendor/modernizr/src/cssToDOM.js","fd80d7f573e7d5c73704ba7a17b2c243"],["vendor/modernizr/src/cssomPrefixes.js","0430974bbc692c95111b0e96c818404d"],["vendor/modernizr/src/docElement.js","bb375032aef9d3f76ffb943174e49945"],["vendor/modernizr/src/domPrefixes.js","d0a43f30b2d6ce62073d7d4540074176"],["vendor/modernizr/src/domToCSS.js","9adad3cabeeb0421b00955b9f7fb574a"],["vendor/modernizr/src/fnBind.js","d43d05142acab8d87f5177ab4b09b2f9"],["vendor/modernizr/src/generate.js","9cd0b1227f6c433b425eef795c1cde20"],["vendor/modernizr/src/getBody.js","25fb739003e95d8d948e66f0c16aa68b"],["vendor/modernizr/src/hasEvent.js","3bfbf60fdfb37f36244eb1c13399697b"],["vendor/modernizr/src/hasOwnProp.js","1d68553cbee3de8bb0e730b8db308637"],["vendor/modernizr/src/html5printshiv.js","fea45d269455e151ba84d4533ee3cb80"],["vendor/modernizr/src/html5shiv.js","b699a4719b9afa7a51b57dfa37a7132c"],["vendor/modernizr/src/injectElementWithStyles.js","e587e1ccc9562d0f91ade1343f7eddd5"],["vendor/modernizr/src/inputElem.js","c6679a28c4da36ec2873ad66cadccb09"],["vendor/modernizr/src/is.js","553e77072d62b5bf5a336de0ccd9c743"],["vendor/modernizr/src/isSVG.js","cf5c24fbda83b3c0275d189a862c1210"],["vendor/modernizr/src/load.js","894e6e52c18435c03a1bad4829865a4f"],["vendor/modernizr/src/mStyle.js","ee333168d67ff8303ac20ae54a2a6cb1"],["vendor/modernizr/src/modElem.js","87bfe68754928cf3618afcc31e4ca577"],["vendor/modernizr/src/mq.js","2b686b04d460ebe0bb723b1451cc7576"],["vendor/modernizr/src/nativeTestProps.js","fa605ac6c2b5d4510ac954884c562e23"],["vendor/modernizr/src/omPrefixes.js","a4ac096c45e56f0a18846f5c28d02caf"],["vendor/modernizr/src/prefixed.js","64d1a4ade48858ce8dfd95dba4eb8efb"],["vendor/modernizr/src/prefixedCSS.js","383eca86293aef460886b4f1b0879e05"],["vendor/modernizr/src/prefixedCSSValue.js","1c5750c87b54c0375659d8174e1daff1"],["vendor/modernizr/src/prefixes.js","b55eebe442a5d8df379b6ef505aa69c3"],["vendor/modernizr/src/roundedEquals.js","44ce22f99e935f6508a490964501b5f4"],["vendor/modernizr/src/setClasses.js","d109ec53b1e7a057e0fead405040a3cf"],["vendor/modernizr/src/slice.js","ce5b80286e9d6f1c20037cc80b356baf"],["vendor/modernizr/src/testAllProps.js","95a99f202cf292b959dab9ab2264c09e"],["vendor/modernizr/src/testDOMProps.js","f0db9c7dfb80b3c7f811f17e8b5a20fc"],["vendor/modernizr/src/testProp.js","7dfeadd6a49f5343d90ea816a1e4e9b8"],["vendor/modernizr/src/testProps.js","835e386624cff0cbdd83477b7f88e7d9"],["vendor/modernizr/src/testPropsAll.js","a8f379b1184008ae5f3bd62cca2a7c49"],["vendor/modernizr/src/testRunner.js","89914c7ad5b0bfa69a74e893eb89e779"],["vendor/modernizr/src/testStyles.js","ddcb9ad98949eb0da3f109e7827cfe25"],["vendor/modernizr/src/testXhrType.js","ba1c43d6274903367da19a348aca0c88"],["vendor/modernizr/src/tests.js","e151a567d32d510b16d33f6c197b01d4"],["vendor/modernizr/src/toStringFn.js","fd96c964582710e71b06760b43bd8e88"],["vendor/modernizr/test/browser/integration.css","37718dd520b3b275c87415e49b4e597f"],["vendor/modernizr/test/browser/integration/bools.js","1965d39b9e97d7188ef5294d8c9ddd7f"],["vendor/modernizr/test/browser/integration/caniuse.js","8dff8077498c293d6d1b4a0dfa68b00a"],["vendor/modernizr/test/browser/integration/classes.js","841fab3dd349a14c946ae7aac8151394"],["vendor/modernizr/test/browser/integration/global.js","9a16d1bbe379cfbc4aa2789827321c60"],["vendor/modernizr/test/browser/integration/iframe.js","f422a42d9611d07f9b345f423cd3ada4"],["vendor/modernizr/test/browser/integration/prefixed-atRule.js","98aa7e90a17329710a311e8eb994ac30"],["vendor/modernizr/test/browser/integration/prefixed-autobind.js","aa219c07cc558a0f1488fc1bcff57589"],["vendor/modernizr/test/browser/integration/prefixed.js","83f87b3b6f1b22e1bd46ecc45f1d153e"],["vendor/modernizr/test/browser/integration/prefixedCSS.js","2ad6aa0d9356930d5be3e8eb095b80b9"],["vendor/modernizr/test/browser/integration/svg.js","34ecdfa6fa65bb670a513580a73781c1"],["vendor/modernizr/test/browser/setup.js","6c54dd386e8f964f63a3a617f647b86c"],["vendor/modernizr/test/browser/src/Modernizr.js","83114d16ec3e1a6b5c0399c958bd6ee6"],["vendor/modernizr/test/browser/src/ModernizrProto.js","a416a4778537107f340e1c6e685d9151"],["vendor/modernizr/test/browser/src/addTest.js","0e1c5ff593eb6fc0cab74982db40b617"],["vendor/modernizr/test/browser/src/atRule.js","d78eb6746c3c4dbe7350c2c994a86431"],["vendor/modernizr/test/browser/src/classes.js","811f113b902a03f4231aaf73f8ceed29"],["vendor/modernizr/test/browser/src/contains.js","71a6435b6aeea3afcaf802525c5bd0f2"],["vendor/modernizr/test/browser/src/createElement.js","0f4790633ab462ca0aadb08e785bdeff"],["vendor/modernizr/test/browser/src/cssToDOM.js","c9b6f97bded8f472ce60f1b20f211a15"],["vendor/modernizr/test/browser/src/cssomPrefixes.js","9012e99f524e0a70330afb46da2dd27a"],["vendor/modernizr/test/browser/src/docElement.js","c96967f998ecdf093bd85eca0c805595"],["vendor/modernizr/test/browser/src/domPrefixes.js","62b68e98f3f2cecf00b5634edfeec377"],["vendor/modernizr/test/browser/src/domToCSS.js","244382851a77fa4db224ba03464bb6ed"],["vendor/modernizr/test/browser/src/fnBind.js","6f4f0ff07741a47987c07b46675656ba"],["vendor/modernizr/test/browser/src/generate.js","70b54db3f10c85d1cf899a022ac5f2b6"],["vendor/modernizr/test/browser/src/getBody.js","75153f9038412f47465adfba1912ec85"],["vendor/modernizr/test/browser/src/hasEvent.js","198c50e027facc529cd3cbaa1f9c25be"],["vendor/modernizr/test/browser/src/hasOwnProp.js","c9093e366534b010c2e6812aaef47ef6"],["vendor/modernizr/test/browser/src/html5printshiv.js","6120d678073adedec9c922f4d1f277f7"],["vendor/modernizr/test/browser/src/html5shiv.js","136390c4c85cc996e56ebda0afdbe09b"],["vendor/modernizr/test/browser/src/injectElementWithStyles.js","b5a88211d0e969eb3ab2ffc988d3ddeb"],["vendor/modernizr/test/browser/src/inputElem.js","785d7b6df98dcf02fae56cd470052e77"],["vendor/modernizr/test/browser/src/is.js","f5d87097b2ea3fb9db84145685fb18d3"],["vendor/modernizr/test/browser/src/load.js","69ddb3ac16f1872f52486d2cf8238e89"],["vendor/modernizr/test/browser/src/mStyle.js","33d1c46ffdae8b811d19f0ea9bcf6cec"],["vendor/modernizr/test/browser/src/modElem.js","434d47361290a3cb3a79889fc91c5f13"],["vendor/modernizr/test/browser/src/mq.js","75ad085dc9eebac6ed2455210a61cc68"],["vendor/modernizr/test/browser/src/nativeTestProps.js","62a41fe49630c64dbb97d94a10299c62"],["vendor/modernizr/test/browser/src/omPrefixes.js","9f8f6e0b77a8cbfc87942388af7c79fd"],["vendor/modernizr/test/browser/src/prefixed.js","cc05db12d79c3495745e9ee224a2c9df"],["vendor/modernizr/test/browser/src/prefixedCSS.js","3e474e2b5a22cbc9a1a205917e7ca75e"],["vendor/modernizr/test/browser/src/prefixedCSSValue.js","99198bdfd156a3a2cd263ee81d651149"],["vendor/modernizr/test/browser/src/prefixes.js","65b62f4341c35ccdb7cae254c5917d3f"],["vendor/modernizr/test/browser/src/roundedEquals.js","1a85751e4907b61c827d19cc247fe5ac"],["vendor/modernizr/test/browser/src/setClasses.js","ad7f723dceac8980aff54a48742b7e99"],["vendor/modernizr/test/browser/src/slice.js","b98c03f6e732d45a4b0cbde1cdfa8d10"],["vendor/modernizr/test/browser/src/testAllProps.js","32a42eb8bb52f4b2635bb81c22f0bd8a"],["vendor/modernizr/test/browser/src/testDOMProps.js","76c735ede158b19c83442b64c7d4ef03"],["vendor/modernizr/test/browser/src/testProp.js","843615496710ba7c968bee2bc5403cb6"],["vendor/modernizr/test/browser/src/testProps.js","ac12db3fdcdaaf8f4d749519dc1814dd"],["vendor/modernizr/test/browser/src/testPropsAll.js","3e2e6a767df24d338edeeb0d4eafdc8d"],["vendor/modernizr/test/browser/src/testRunner.js","7af7b9ebbede3edd1fdbaf4232c0553a"],["vendor/modernizr/test/browser/src/testStyles.js","e6d0c1843065674c49a16f8044ac27a0"],["vendor/modernizr/test/browser/src/testXhrType.js","02118a09232b1f8606fe4235ac073890"],["vendor/modernizr/test/browser/src/tests.js","6084b521d67b78593d24e640afb188af"],["vendor/modernizr/test/browser/src/toStringFn.js","a70cdf0c5cd484c0119afae17d55753f"],["vendor/modernizr/test/browser/svgUnit.js","84571957dcabc995aa2a0b40affcac6e"],["vendor/modernizr/test/cleanup.js","3bae4ff4a007f88f91b6f2c62bc102b0"],["vendor/modernizr/test/js/lib/sinon.js","d5737cf11dd147a6963af226b365ffdf"],["vendor/modernizr/test/js/lib/uaparser.js","320082f3099a71e9d25a68c8147ab48b"],["vendor/modernizr/test/mocks/lib/build-query.js","d3be161468166b72564f8dd421c00b64"],["vendor/modernizr/test/mocks/lib/metadata.js","753cc31fabea80eda27c80053c1eafe8"],["vendor/modernizr/test/node/lib/build.js","81af84c1952c2eb4561d77ab0825de0d"],["vendor/modernizr/test/node/lib/cli.js","d680085813d3adf33dd0110fb22db4ee"],["vendor/modernizr/test/node/lib/metadata.js","32d4a6c9c6b9a05a9a3319561aceae49"],["vendor/modernizr/test/node/lib/options.js","be38a49ba0850a4161897130b179a076"],["vendor/modernizr/test/universal/lib/build-hash.js","f255f5abe6c68ae0228752d5d86c9eeb"],["vendor/modernizr/test/universal/lib/generate-banner.js","98d36dda9555188a142efc7a0f9e5a2b"],["vendor/polymer/polymer-micro.html","b0e025ddab51a96db0b41ad4c257a13e"],["vendor/polymer/polymer-mini.html","6d2e3a533e30876a516f840ef38abd29"],["vendor/polymer/polymer.html","0826e5fd9c4786b738b9546a607356f0"],["vendor/social-media-icons/demo.html","e99109dd19bf1fda63d126af67324bf5"],["vendor/social-media-icons/index.html","279e55fd4a0654d27149dbce4e48bfa0"],["vendor/social-media-icons/social-media-icons.html","ca586579da22999570ee018520d2f82e"],["vendor/system.js/dist/system-csp-production.js","7c038f5d3cbf09cb5ce970dff6d35694"],["vendor/system.js/dist/system-csp-production.src.js","2ca7d5bb1b63a74506470eb9f4879c0e"],["vendor/system.js/dist/system-polyfills.js","fc606a7eb0e596a2a20da402ef1a9d08"],["vendor/system.js/dist/system-polyfills.src.js","215981d16804b614b668309864d24692"],["vendor/system.js/dist/system-register-only.js","417feef9ac2db49b1c434f19a39ac187"],["vendor/system.js/dist/system-register-only.src.js","b9d01594feebd8dc93c9ab678c81d3f7"],["vendor/system.js/dist/system.js","e0bdb0645e5edce6d0f850293499f6b8"],["vendor/system.js/dist/system.src.js","d569df7fcabf5b99ede315f92554a1a1"],["vendor/webcomponentsjs/CustomElements.js","9828c15ba6b99cb5860ba64167f67937"],["vendor/webcomponentsjs/CustomElements.min.js","13e22966d8c98addeb19edf3cbe3bb69"],["vendor/webcomponentsjs/HTMLImports.js","69ee9852fbafc91c24c8fc7e86676e3d"],["vendor/webcomponentsjs/HTMLImports.min.js","f6890989b0da9b082263422164aeb924"],["vendor/webcomponentsjs/MutationObserver.js","9883e38031ae18171d3d15ac60ea7c60"],["vendor/webcomponentsjs/MutationObserver.min.js","742c58ac46c5a5e421f62c0d0f060e5e"],["vendor/webcomponentsjs/ShadowDOM.js","1942ed8f8ec03fa04dfb14122bc7af7b"],["vendor/webcomponentsjs/ShadowDOM.min.js","8dafd00d000f5b73ec0b21d49b50c5b4"],["vendor/webcomponentsjs/webcomponents-lite.js","c115d3a72fd85f1d98c082d4dd3d2891"],["vendor/webcomponentsjs/webcomponents-lite.min.js","e90ccfe5a498fa029a454690c87b05d1"],["vendor/webcomponentsjs/webcomponents.js","13b10ac2d18b80b22b9ea89865d14e74"],["vendor/webcomponentsjs/webcomponents.min.js","c43ea7fef32565c7391987be88cd9cce"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-furkantunali.com=v4.2.0-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




