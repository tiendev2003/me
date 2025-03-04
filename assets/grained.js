/*! For license information please see grained.js.LICENSE.txt */
!(function (e, t) {
    "use strict";
    e.grained = function (e, n) {
      var i,
        a,
        r = null;
      if (("string" == typeof e && (r = t.getElementById(e.split("#")[1])), r)) {
        (i = r.id),
          "absolute" !== r.style.position && (r.style.position = "relative"),
          (r.style.overflow = "hidden");
        var o = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"],
          d = {
            animate: !0,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
            grainChaos: 0.5,
            grainSpeed: 20,
          };
        Object.keys(n).forEach(function (e) {
          d[e] = n[e];
        });
        for (
          var l = (function () {
              var e = t.createElement("canvas"),
                n = e.getContext("2d");
              (e.width = d.patternWidth), (e.height = d.patternHeight);
              for (var i = 0; i < d.patternWidth; i += d.grainDensity)
                for (var a = 0; a < d.patternHeight; a += d.grainDensity) {
                  var r = (256 * Math.random()) | 0;
                  (n.fillStyle =
                    "rgba(" + [r, r, r, d.grainOpacity].join() + ")"),
                    n.fillRect(i, a, d.grainWidth, d.grainHeight);
                }
              return e.toDataURL("image/png");
            })(),
            g = "",
            s = [
              "0%:-10%,10%",
              "10%:-25%,0%",
              "20%:-30%,10%",
              "30%:-30%,30%",
              "40%::-20%,20%",
              "50%:-15%,10%",
              "60%:-20%,20%",
              "70%:-5%,20%",
              "80%:-25%,5%",
              "90%:-30%,25%",
              "100%:-10%,10%",
            ],
            h = o.length;
          h--;
  
        ) {
          g += "@" + o[h] + "keyframes grained{";
          for (var m = 0; m < s.length; m++) {
            var p = s[m].split(":");
            (g += p[0] + "{"),
              (g += o[h] + "transform:translate(" + p[1] + ");"),
              (g += "}");
          }
          g += "}";
        }
        var c = t.getElementById("grained-animation");
        c && c.parentElement.removeChild(c);
        var f = t.createElement("style");
        (f.type = "text/css"),
          (f.id = "grained-animation"),
          (f.innerHTML = g),
          t.body.appendChild(f);
        var y = t.getElementById("grained-animation-" + i);
        y && y.parentElement.removeChild(y),
          ((f = t.createElement("style")).type = "text/css"),
          (f.id = "grained-animation-" + i),
          t.body.appendChild(f);
        var u = "background-image: url(" + l + ");";
        if (
          ((u +=
            'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;'),
          (h = o.length),
          d.animate)
        )
          for (; h--; )
            (u += o[h] + "animation-name:grained;"),
              (u += o[h] + "animation-iteration-count: infinite;"),
              (u += o[h] + "animation-duration: " + d.grainChaos + "s;"),
              (u +=
                o[h] +
                "animation-timing-function: steps(" +
                d.grainSpeed +
                ", end);");
        (a = "#" + i + "::before"),
          (function (e, t, n, i) {
            var a;
            (a = t.length ? t + "{" + n + "}" : n),
              "insertRule" in e
                ? e.insertRule(a, i)
                : "addRule" in e && e.addRule(t, n, i);
          })(f.sheet, a, u);
      } else console.error("Grained: cannot find the element with id " + e);
    };
  })(window, document);
  