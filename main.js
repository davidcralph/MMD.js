window.onload = () => {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  canvas.style.border = "solid black 1px";

  document.body.appendChild(canvas);

  const mmd = new MMD(canvas, canvas.width, canvas.height);
  mmd.initShaders();
  mmd.initParameters();
  mmd.registerKeyListener(canvas);
  mmd.registerMouseListener(canvas);

  const audio = new MMD.AudioSource("audio", "wow.mp3", 1);
  audio.load(() => {
    document.addEventListener("mousedown", () => {
      audio.play();
    });
  });

  const miku = new MMD.Model("model", "Miku_Hatsune_Ver2.pmd");
  miku.load(() => {
    mmd.addModel(miku);
    mmd.initBuffers();
    mmd.start();

    const dance = new MMD.Motion("motion/kishimen.vmd");
    dance.load(() => {
      mmd.addModelMotion(miku, dance, true);
      mmd.play();

      setInterval(() => {
        console.log("fps = " + mmd.realFps);
      }, 1000);
    });
  });
};
