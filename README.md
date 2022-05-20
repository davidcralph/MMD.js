# MMD.js

MikuMikuDance player on WebGL.

## Demo

- https://mmd-js.netlify.app/

## Features

- PMD (model) and VMD (motion) parsers
- Shader that's almost compatible with MMD
- Camera, light and morph animation
- Audio support (new)

Yet to come

- Bone animation
- Physics

Maybe to come

- Multi-model
- Direct X accessories (.x)

Likely NOT to come

- Editing motions

## Build

```
coffee --join MMD.js --compile src/MMD.coffee src/MMD.AudioSource.coffee src/MMD.FragmentShaderSource.coffee src/MMD.Model.coffee src/MMD.Motion.coffee src/MMD.MotionManager.coffee src/MMD.ShadowMap.coffee src/MMD.TextureManager.coffee src/MMD.VertexShaderSource.coffee
```

## Dependence

- glMatrix.js (1.x) <https://github.com/toji/gl-matrix>

## License

The MIT License <http://www.opensource.org/licenses/mit-license.php>

Copyright (c) 2011 Atsushi Takayama

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements
(Atsushi's acknowledgements)
- higuchuu for developing the original MikuMikuDance software <http://www.geocities.jp/higuchuu4/>
- MMDAgent project <http://www.mmdagent.jp/> and MikuMikuStudio project <http://sourceforge.jp/projects/mikumikustudio/> for high quality open source MMD clones. (I did not use their code, but studied them extensively)

(David's acknowledgements)
- daniwell for creating the song used in the "audio/" folder "Wonder of Wonder - daniwell feat. HatsuneMiku" (permission is granted in <https://aidn.jp/about/>)
- RicoP's fork was used to port the requestAnimationFrame code over <https://github.com/RicoP/MMD.js/commit/74d1550bff33ae9e3123f954f61a42f3fb014b91>

## Author

Atsushi Takayama

## Fork Author

David Ralph
