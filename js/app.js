const iframe = document.getElementById('editor');
const view   = document.getElementById('view');
let hHtml = "";
let hCss = "";
let hJs = "";
let Body = `<body>
                ${hHtml}
                <style>${hCss}</style>
                <script>${hJs}</script>
            </body>`;
const js = CodeMirror.fromTextArea(document.getElementById("js"), {
  lineNumbers: true,
  theme:"material",
  mode:"javascript"
});
const css = CodeMirror.fromTextArea(document.getElementById("css"), {
  lineNumbers: true,
  theme:"material",
  mode:"css"
});
const html = CodeMirror.fromTextArea(document.getElementById("html"), {
  lineNumbers: true,
  theme:"material",
  mode:"xml",
});

html.on('change',function(cm,change){
  hHtml= cm.getRange({ line: 0, ch: 0 }, { line: cm.lineCount() + 1, ch: 0 });
  Body = `<body>
                ${hHtml}
                <style>${hCss}</style>
                <script>${hJs}</script>
            </body>`;
  iframe.srcdoc = Body;
});

css.on('beforeChange',function(cm,change){
  hCss= cm.getRange({ line: 0, ch: 0 }, { line: cm.lineCount() + 1, ch: 0 });
  Body = `<body>
                ${hHtml}
                <style>${hCss}</style>
                <script>${hJs}</script>
            </body>`;
  iframe.srcdoc = Body;
});

js.on('beforeChange',function(cm,change){
  hJs= cm.getRange({ line: 0, ch: 0 }, { line: cm.lineCount() + 1, ch: 0 });
  Body = `<body>
                ${hHtml}
                <style>${hCss}</style>
                <script>${hJs}</script>
            </body>`;
  iframe.srcdoc = Body;
});

Array.from(document.querySelectorAll('.description button')).forEach(btn =>{
  btn.addEventListener('click',function(){
    this.parentElement.parentElement.classList.toggle("minimize");
    this.firstElementChild.classList.toggle('fa-window-maximize');
    this.firstElementChild.classList.toggle('fa-window-minimize');
  });
});

Array.from(document.querySelectorAll('.view-option button')).forEach(btn =>{
  btn.addEventListener('click',function(){
    view.className = "";
    view.classList.add(this.dataset.class);
  });
});