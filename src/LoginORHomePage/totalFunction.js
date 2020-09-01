

export let addCSS = (id, url, i) => {
  var head = document.head;
  var link = document.createElement("link");
  link.id = id;
//   link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  
  head.appendChild(link);
};

export let addScript = (id, url, i) => {
  var body = document.body;
  var script = document.createElement("script");
  script.id = id;
  script.src = url;

  body.appendChild(script);
};

export let clearCSS =(id) => {
    document.querySelectorAll(`link[id=${id}]`).forEach((val,i)=>{
        val.remove()
    })
}




let listAdmin3CSS = [
  "https://fonts.googleapis.com/css?family=Open+Sans:400,600,800",
  "/Admin3/bower_components/bootstrap/css/bootstrap.min.css",
  "/Admin3/assets/icon/themify-icons/themify-icons.css",
  "/Admin3/assets/icon/icofont/css/icofont.css",
  "/Admin3/assets/icon/feather/css/feather.css",
  "/Admin3/bower_components/select2/css/select2.min.css",
  "/Admin3/bower_components/bootstrap-multiselect/css/bootstrap-multiselect.css",
  "/Admin3/bower_components/multiselect/css/multi-select.css",
  "/Admin3/assets/css/style.css",
  "/Admin3/assets/css/jquery.mCustomScrollbar.css",
];
let listAdmin3JS = [
  "/Admin3/bower_components/jquery/js/jquery.min.js",
  "/Admin3/bower_components/jquery-ui/js/jquery-ui.min.js",
  "/Admin3/bower_components/popper.js/js/popper.min.js",
  "/LoginCSS/bootstrap.min.css",
  "/Admin3/bower_components/bootstrap/js/bootstrap.min.js",
  "/Admin3/bower_components/jquery-slimscroll/js/jquery.slimscroll.js",
  "/Admin3/bower_components/modernizr/js/modernizr.js",
  "/Admin3/bower_components/modernizr/js/css-scrollbars.js",
  "/Admin3/bower_components/select2/js/select2.full.min.js",
  "/Admin3/bower_components/bootstrap-multiselect/js/bootstrap-multiselect.js",
  "/Admin3/bower_components/multiselect/js/jquery.multi-select.js",
  "/Admin3/assets/js/jquery.quicksearch.js",
  "/Admin3/assets/pages/advance-elements/select2-custom.js",
  "/Admin3/assets/js/pcoded.min.js",
  "/Admin3/assets/js/vartical-layout.min.js",
  "/Admin3/assets/js/jquery.mCustomScrollbar.concat.min.js",
  "/Admin3/assets/js/script.js",
];

export let addAdminCSSvsJS3 = () => {
  return new Promise(async (resolve, reject) => {
    document
      .getElementsByTagName("html")
      .item(
        0
      ).className = `js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage 
            websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage
            borderradius boxshadow textshadow opacity cssanimations 
            csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage 
            sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths cssscrollbar`;
    // listAdmin3CSS.map((val, i) => {
    //   return addCSS("admin3", val, i);
    // });
    // listAdmin3JS.map((val, i) => {
    //   return addScript("admin3", val, i);
    // });

    resolve(true);
  });
};
