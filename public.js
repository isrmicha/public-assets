const appMapper = [
  {
    title: "Panque meu Queixo",
    image:
      "https://lh3.googleusercontent.com/PEu_FFbCGWy78rZIbwtubg8KsVoxye2irMAS6CBn5Yc7AX5IMsZwzlyClsJ0_VPXM9u_",
    url: "https://play.google.com/store/apps/details?id=com.isrstudio.panquemeuqueixo",
  },
  {
    title: "Mizeravi Matemática Quiz",
    image:
      "https://lh3.googleusercontent.com/HG97inB3yMUk4zi7zFaO4BY7BjlNjWRYNRFFWrsaQnsDbnSxi5r7OTGXMfo9v_-teb0",
    url: "https://play.google.com/store/apps/details?id=com.isrstudio.mizeravi",
  },
  {
    title: "Calma Calabreso",
    image:
      "https://lh3.googleusercontent.com/pJP4BVpVGXa4djohccl6tBwbq525WMq4t6KfAwQSIhea6S3gCZ6BI3th6GHEQB2DVA",
    url: "https://play.google.com/store/apps/details?id=com.isrstudio.calmacalabreso",
  },
];

const elements = appMapper.forEach((app) => {
  const a = document.createElement("a");
  a.href = app.url;

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = app.title;
  div.appendChild(p);
  let img = new Image();
  img.src = app.image;
  div.appendChild(img);
  a.appendChild(div);
  document.getElementById("external").appendChild(a);
});
