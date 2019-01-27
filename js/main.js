/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        e = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        b = function() {
            for (var f, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], e = 0, d = b.length, c = {}; e < d; e++)
                if ((f = b[e]) && f[1] in a) {
                    for (e = 0; e < f.length; e++) c[b[0][e]] =
                        f[e];
                    return c
                }
            return !1
        }(),
        g = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        },
        l = {
            request: function(f) {
                var c = b.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[c]();
                else f[c](e && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[b.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(f, b) {
                var e = g[f];
                e && a.addEventListener(e, b, !1)
            },
            off: function(b,
                e) {
                var f = g[b];
                f && a.removeEventListener(f, e, !1)
            },
            raw: b
        };
    b ? (Object.defineProperties(l, {
        isFullscreen: {
            get: function() {
                return !!a[b.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[b.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[b.fullscreenEnabled]
            }
        }
    }), c ? module.exports = l : window.screenfull = l) : c ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function c(a, d) {
        var f = -1,
            e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= u)
            for (; ++f < e;) d(a[f], f, a);
        else b(a, d)
    }

    function e(d) {
        d = String(d).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(d) ? d : a(d)
    }

    function b(a, d) {
        for (var f in a) x.call(a, f) && d(a[f], f, a)
    }

    function g(d) {
        return null == d ? a(d) : v.call(d).slice(8, -1)
    }

    function l(a, d) {
        var f = null != a ? typeof a[d] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(f) &&
            ("object" == f ? !!a[d] : !0)
    }

    function f(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(a, d) {
        var f = null;
        c(a, function(b, e) {
            f = d(f, b, e, a)
        });
        return f
    }

    function p(a) {
        function d(d) {
            return m(d, function(d, b) {
                var h = b.pattern || f(b);
                !d && (d = RegExp("\\b" + h + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + h + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + h + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((d = String(b.label && !RegExp(h, "i").test(b.label) ? b.label : d).split("/"))[1] && !/[\d.]+/.test(d[0]) && (d[0] +=
                    " " + d[1]), b = b.label || b, d = e(d[0].replace(RegExp(h, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return d
            })
        }

        function c(d) {
            return m(d, function(d, f) {
                return d || (RegExp(f + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var k = t,
            h = a && "object" == typeof a && "String" != g(a);
        h && (k = a, a = null);
        var u = k.navigator || {},
            r = u.userAgent || "";
        a || (a = r);
        var x = h ? !!u.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(v.toString()),
            A = h ? "Object" : "ScriptBridgingProxyObject",
            E = h ? "Object" : "Environment",
            R = h && k.java ? "JavaPackage" : g(k.java),
            Q = h ? "Object" : "RuntimeObject";
        E = (R = /\bJava/.test(R) && k.java) && g(k.environment) == E;
        var T = R ? "a" : "\u03b1",
            P = R ? "b" : "\u03b2",
            N = k.document || {},
            J = k.operamini || k.opera,
            D = q.test(D = h && J ? J["[[Class]]"] : g(J)) ? D : J = null,
            n, U = a;
        h = [];
        var V = null,
            S = a == r;
        r = S && J && "function" == typeof J.version && J.version();
        var F = function(d) {
                return m(d, function(d, b) {
                    return d || RegExp("\\b" + (b.pattern || f(b)) + "\\b", "i").exec(a) && (b.label ||
                        b)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            w = function(d) {
                return m(d, function(d, b) {
                    return d || RegExp("\\b" + (b.pattern || f(b)) + "\\b", "i").exec(a) && (b.label || b)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            G = d([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            L = function(d) {
                return m(d, function(d, b, h) {
                    return d || (b[G] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp("\\b" + f(h) + "(?:\\b|\\w*\\d)", "i").exec(a)) && h
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            y = function(d) {
                return m(d, function(d, b) {
                    var h = b.pattern || f(b);
                    if (!d && (d = RegExp("\\b" + h + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var k = d,
                            c = b.label || b,
                            g = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        h && c && /^Win/i.test(k) && !/^Windows Phone /i.test(k) && (g = g[/[\d.]+$/.exec(k)]) && (k = "Windows " + g);
                        k = String(k);
                        h && c && (k = k.replace(RegExp(h, "i"), c));
                        d = k = e(k.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return d
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        F && (F = [F]);
        L && !G && (G = d([L]));
        if (n = /\bGoogle TV\b/.exec(G)) G = n[0];
        /\bSimulator\b/i.test(a) && (G = (G ? G + " " : "") + "Simulator");
        "Opera Mini" == w && /\bOPiOS\b/.test(a) && h.push("running in Turbo/Uncompressed mode");
        "IE" == w && /\blike iPhone OS\b/.test(a) ? (n = p(a.replace(/like iPhone OS/, "")), L = n.manufacturer, G = n.product) : /^iP/.test(G) ? (w || (w = "Safari"), y = "iOS" + ((n = / OS ([\d_]+)/i.exec(a)) ? " " + n[1].replace(/_/g, ".") : "")) : "Konqueror" != w || /buntu/i.test(y) ? L && "Google" != L && (/Chrome/.test(w) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(G)) || /\bAndroid\b/.test(y) && /^Chrome/.test(w) && /\bVersion\//i.test(a) ? (w = "Android Browser", y = /\bAndroid\b/.test(y) ? y : "Android") : "Silk" == w ? (/\bMobi/i.test(a) || (y = "Android", h.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && h.unshift("accelerated")) : "PaleMoon" == w && (n = /\bFirefox\/([\d.]+)\b/.exec(a)) ? h.push("identifying as Firefox " + n[1]) : "Firefox" == w && (n = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (y || (y = "Firefox OS"), G || (G = n[1])) : !w || (n = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(w)) ? (w && !G && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(n + "/") + 8)) && (w = null), (n = G || L || y) && (G || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(y)) && (w = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(y) ? y : n) + " Browser")) : "Electron" == w && (n = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && h.push("Chromium " + n) : y = "Kubuntu";
        r || (r = c(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(w), "(?:Firefox|Minefield|NetFront)"]));
        if (n = "iCab" == F && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(w) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(a) && ("Mac OS" == y ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(w) && "NetFront") F = [n];
        "IE" == w && (n = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (w += " Mobile", y = "Windows Phone " + (/\+$/.test(n) ? n : n + ".x"), h.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (w = "IE Mobile", y = "Windows Phone 8.x",
            h.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != w && "Trident" == F && (n = /\brv:([\d.]+)/.exec(a)) && (w && h.push("identifying as " + w + (r ? " " + r : "")), w = "IE", r = n[1]);
        if (S) {
            if (l(k, "global"))
                if (R && (n = R.lang.System, U = n.getProperty("os.arch"), y = y || n.getProperty("os.name") + " " + n.getProperty("os.version")), E) {
                    try {
                        r = k.require("ringo/engine").version.join("."), w = "RingoJS"
                    } catch (X) {
                        (n = k.system) && n.global.system == k.system && (w = "Narwhal", y || (y = n[0].os || null))
                    }
                    w || (w = "Rhino")
                } else "object" == typeof k.process &&
                    !k.process.browser && (n = k.process) && ("object" == typeof n.versions && ("string" == typeof n.versions.electron ? (h.push("Node " + n.versions.node), w = "Electron", r = n.versions.electron) : "string" == typeof n.versions.nw && (h.push("Chromium " + r, "Node " + n.versions.node), w = "NW.js", r = n.versions.nw)), w || (w = "Node.js", U = n.arch, y = n.platform, r = (r = /[\d.]+/.exec(n.version)) ? r[0] : null));
            else g(n = k.runtime) == A ? (w = "Adobe AIR", y = n.flash.system.Capabilities.os) : g(n = k.phantom) == Q ? (w = "PhantomJS", r = (n = n.version || null) && n.major + "." + n.minor +
                "." + n.patch) : "number" == typeof N.documentMode && (n = /\bTrident\/(\d+)/i.exec(a)) ? (r = [r, N.documentMode], (n = +n[1] + 4) != r[1] && (h.push("IE " + r[1] + " mode"), F && (F[1] = ""), r[1] = n), r = "IE" == w ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof N.documentMode && /^(?:Chrome|Firefox)\b/.test(w) && (h.push("masking as " + w + " " + r), w = "IE", r = "11.0", F = ["Trident"], y = "Windows");
            y = y && e(y)
        }
        r && (n = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (S && u.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (V = /b/i.test(n) ? "beta" : "alpha", r = r.replace(RegExp(n + "\\+?$"), "") + ("beta" == V ? P : T) + (/\d+\+?/.exec(n) || ""));
        if ("Fennec" == w || "Firefox" == w && /\b(?:Android|Firefox OS)\b/.test(y)) w = "Firefox Mobile";
        else if ("Maxthon" == w && r) r = r.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(G)) "Xbox 360" == G && (y = null), "Xbox 360" == G && /\bIEMobile\b/.test(a) && h.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(w) && (!w || G || /Browser|Mobi/.test(w)) || "Windows CE" != y && !/Mobi/i.test(a))
            if ("IE" == w && S) try {
                null === k.external &&
                    h.unshift("platform preview")
            } catch (X) {
                h.unshift("embedded")
            } else(/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(a)) && (n = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || r) ? (n = [n, /BB10/.test(a)], y = (n[1] ? (G = null, L = "BlackBerry") : "Device Software") + " " + n[0], r = null) : this != b && "Wii" != G && (S && J || /Opera/.test(w) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == w && /\bOS X (?:\d+\.){2,}/.test(y) || "IE" == w && (y && !/^Win/.test(y) && 5.5 < r || /\bWindows XP\b/.test(y) && 8 < r || 8 == r && !/\bTrident\b/.test(a))) && !q.test(n =
                p.call(b, a.replace(q, "") + ";")) && n.name && (n = "ing as " + n.name + ((n = n.version) ? " " + n : ""), q.test(w) ? (/\bIE\b/.test(n) && "Mac OS" == y && (y = null), n = "identify" + n) : (n = "mask" + n, w = D ? e(D.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(n) && (y = null), S || (r = null)), F = ["Presto"], h.push(n));
            else w += " Mobile";
        if (n = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            n = [parseFloat(n.replace(/\.(\d)$/, ".0$1")), n];
            if ("Safari" == w && "+" == n[1].slice(-1)) w = "WebKit Nightly", V = "alpha", r = n[1].slice(0, -1);
            else if (r == n[1] || r == (n[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) r = null;
            n[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == n[0] && 537.36 == n[2] && 28 <= parseFloat(n[1]) && "WebKit" == F && (F = ["Blink"]);
            S && (x || n[1]) ? (F && (F[1] = "like Chrome"), n = n[1] || (n = n[0], 530 > n ? 1 : 532 > n ? 2 : 532.05 > n ? 3 : 533 > n ? 4 : 534.03 > n ? 5 : 534.07 > n ? 6 : 534.1 > n ? 7 : 534.13 > n ? 8 : 534.16 > n ? 9 : 534.24 > n ? 10 : 534.3 > n ? 11 : 535.01 > n ? 12 : 535.02 > n ? "13+" : 535.07 > n ? 15 : 535.11 > n ? 16 : 535.19 > n ? 17 : 536.05 > n ? 18 : 536.1 > n ? 19 : 537.01 > n ? 20 : 537.11 > n ? "21+" : 537.13 > n ? 23 : 537.18 > n ? 24 : 537.24 > n ? 25 : 537.36 > n ? 26 : "Blink" !=
                F ? "27" : "28")) : (F && (F[1] = "like Safari"), n = (n = n[0], 400 > n ? 1 : 500 > n ? 2 : 526 > n ? 3 : 533 > n ? 4 : 534 > n ? "4+" : 535 > n ? 5 : 537 > n ? 6 : 538 > n ? 7 : 601 > n ? 8 : "8"));
            F && (F[1] += " " + (n += "number" == typeof n ? ".x" : /[.+]/.test(n) ? "" : "+"));
            "Safari" == w && (!r || 45 < parseInt(r)) && (r = n)
        }
        "Opera" == w && (n = /\bzbov|zvav$/.exec(y)) ? (w += " ", h.unshift("desktop mode"), "zvav" == n ? (w += "Mini", r = null) : w += "Mobile", y = y.replace(RegExp(" *" + n + "$"), "")) : "Safari" == w && /\bChrome\b/.exec(F && F[1]) && (h.unshift("desktop mode"), w = "Chrome Mobile", r = null, /\bOS X\b/.test(y) ? (L =
            "Apple", y = "iOS 4.3+") : y = null);
        r && 0 == r.indexOf(n = /[\d.]+$/.exec(y)) && -1 < a.indexOf("/" + n + "-") && (y = String(y.replace(n, "")).replace(/^ +| +$/g, ""));
        F && !/\b(?:Avant|Nook)\b/.test(w) && (/Browser|Lunascape|Maxthon/.test(w) || "Safari" != w && /^iOS/.test(y) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(w) && F[1]) && (n = F[F.length - 1]) && h.push(n);
        h.length && (h = ["(" + h.join("; ") + ")"]);
        L && G && 0 > G.indexOf(L) && h.push("on " + L);
        G && h.push((/^on /.test(h[h.length -
            1]) ? "" : "on ") + G);
        if (y) {
            var W = (n = / ([\d.+]+)$/.exec(y)) && "/" == y.charAt(y.length - n[0].length - 1);
            y = {
                architecture: 32,
                family: n && !W ? y.replace(n[0], "") : y,
                version: n ? n[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(n = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (y && (y.architecture = 64, y.family = y.family.replace(RegExp(" *" + n), "")), w && (/\bWOW64\b/i.test(a) || S && /\w(?:86|32)$/.test(u.cpuClass || u.platform) && !/\bWin64; x64\b/i.test(a)) &&
            h.unshift("32-bit")) : y && /^OS X/.test(y.family) && "Chrome" == w && 39 <= parseFloat(r) && (y.architecture = 64);
        a || (a = null);
        k = {};
        k.description = a;
        k.layout = F && F[0];
        k.manufacturer = L;
        k.name = w;
        k.prerelease = V;
        k.product = G;
        k.ua = a;
        k.version = w && r;
        k.os = y || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        k.parse = p;
        k.toString = function() {
            return this.description || ""
        };
        k.version && h.unshift(r);
        k.name && h.unshift(w);
        y && w && (y != String(y).split(" ")[0] || y != w.split(" ")[0] && !G) && h.push(G ? "(" + y + ")" : "on " +
            y);
        h.length && (k.description = h.join(" "));
        return k
    }
    var d = {
            "function": !0,
            object: !0
        },
        t = d[typeof window] && window || this,
        h = d[typeof exports] && exports;
    d = d[typeof module] && module && !module.nodeType && module;
    var k = h && d && "object" == typeof global && global;
    !k || k.global !== k && k.window !== k && k.self !== k || (t = k);
    var u = Math.pow(2, 53) - 1,
        q = /\bOpera/;
    k = Object.prototype;
    var x = k.hasOwnProperty,
        v = k.toString,
        A = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (t.platform = A, define(function() {
            return A
        })) : h &&
        d ? b(A, function(a, d) {
            h[d] = a
        }) : t.platform = A
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], c = 0; c < a.length; c++) {
        var e = document.createElement("meta");
        e.name = a[c].name;
        e.content = a[c].content;
        var b = window.document.head.querySelector('meta[name="' + e.name + '"]');
        b && b.parentNode.removeChild(b);
        window.document.head.appendChild(e)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_oCanvasLeft, s_oCanvasTop;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var c = a.toLowerCase(),
        e = window.document,
        b = e.documentElement;
    if (void 0 === window["inner" + a]) a = b["client" + a];
    else if (window["inner" + a] != b["client" + a]) {
        var g = e.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var l = e.createElement("div");
        l.id = "vpw-test-d";
        l.style.cssText = "position:absolute;top:-1000px";
        l.innerHTML = "<style>@media(" + c + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        g.appendChild(l);
        b.insertBefore(g, e.head);
        a = 7 == l["offset" + a] ? b["client" + a] : window["inner" + a];
        b.removeChild(g)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var e = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            b = Math.round(CANVAS_WIDTH * e);
        e = Math.round(CANVAS_HEIGHT * e);
        if (e < a) {
            var g = a - e;
            e += g;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else b < c && (g = c - b, b += g, e += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - e / 2;
        var l = c / 2 - b / 2,
            f = CANVAS_WIDTH / b;
        if (l * f < -EDGEBOARD_X || g * f < -EDGEBOARD_Y) e = Math.min(a /
            (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * e, e *= CANVAS_HEIGHT, g = (a - e) / 2, l = (c - b) / 2, f = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * l * f;
        s_iOffsetY = -1 * g * f;
        0 <= g && (s_iOffsetY = 0);
        0 <= l && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos();
        s_bMobile ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", e + "px")) : s_oStage && (s_oStage.canvas.width = b, s_oStage.canvas.height = e, s_iScaleFactor =
            Math.min(b / CANVAS_WIDTH, e / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g ? $("#canvas").css("top", g + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", l + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, c, e) {
    var b = new createjs.Bitmap(a),
        g = new createjs.Shape;
    c && e ? g.graphics.beginFill("#fff").drawRect(0, 0, c, e) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    b.hitArea = g;
    return b
}

function createSprite(a, c, e, b, g, l) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-e, -b, g, l);
    a.hitArea = c;
    return a
}

function randomFloatBetween(a, c, e) {
    "undefined" === typeof e && (e = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(e))
}

function shuffle(a) {
    for (var c = a.length, e, b; 0 !== c;) b = Math.floor(Math.random() * c), --c, e = a[c], a[c] = a[b], a[b] = e;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var e = "";
    e = 10 > c ? e + ("0" + c + ":") : e + (c + ":");
    return 10 > a ? e + ("0" + a) : e + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, e, b; 0 < c;) b = Math.floor(Math.random() * c), c--, e = a[c], a[c] = a[b], a[b] = e;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), e = 0; e < c.length; e++) {
        var b = c[e].split("=");
        if (b[0] == a) return b[1]
    }
}

function playSound(a, c, e) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(e), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}

function isSoundPlaying(a) {
    return s_aSounds[a].playing()
}

function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});
window.GD_OPTIONS = {
    gameId: "abe1a6efd33745edbde70045061de6a5",
    onEvent: function(a) {
        switch (a.name) {
            case "SDK_GAME_START":
                s_oMain.startUpdate();
                break;
            case "SDK_GAME_PAUSE":
                s_oMain.stopUpdate()
        }
    }
};
(function(a, c, e) {
    var b = a.getElementsByTagName(c)[0];
    a.getElementById(e) || (a = a.createElement(c), a.id = e, a.src = "https://html5.api.gamedistribution.com/main.min.js", b.parentNode.insertBefore(a, b))
})(document, "script", "gamedistribution-jssdk");

function CSpriteLibrary() {
    var a, c, e, b, g, l;
    this.init = function(f, m, p) {
        e = c = 0;
        b = f;
        g = m;
        l = p;
        a = {}
    };
    this.addSprite = function(b, e) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: e,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        g.call(l)
    };
    this._onSpriteLoaded = function() {
        b.call(l);
        ++e === c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return c
    }
}
var CANVAS_WIDTH = 1500,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 180,
    EDGEBOARD_Y = 20,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "TradeGothic",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_MENU_LEVEL = 2,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_BUT_YES_DOWN = 6,
    ON_PLAYER_ARRIVAL = 7,
    ON_PLAYER_FALL = 8,
    ON_OPPONENT_HIDE = 9,
    ON_OPPONENT_CHECK_COLLISION = 10,
    ON_READY_FOR_PLAYER_ARRIVAL = 11,
    ON_BACK_MENU = 12,
    ON_RESTART = 13,
    ON_NEXT_LEVEL = 14,
    ON_BUT_END_TWEEN_X = 15,
    ON_END_COUNTDOWN =
    16,
    PLAYER_ANIM_RUN = 0,
    PLAYER_ANIM_FALL = 1,
    PLAYER_ANIM_ARRIVAL = 2,
    PLAYER_ANIM_LEFT = 3,
    PLAYER_ANIM_LEFT_OUT = 4,
    PLAYER_ANIM_RIGHT = 5,
    PLAYER_ANIM_RIGHT_OUT = 6,
    STARTING_STANDS_SCALE_BONUS = .74,
    NUM_LEVELS, OPPONENT_FINAL_Y = 1200,
    TIME_OPPONENT_RUN_0 = 2600,
    TIME_OPPONENT_RUN_1 = 800,
    TIME_OPPONENT_RUN = 3E3,
    HERO_ACCELERATION, HERO_FRICTION, MAX_HERO_SPEED, MIN_START_X = CANVAS_WIDTH / 2 - 50,
    MAX_START_X = CANVAS_WIDTH / 2 + 50,
    MIN_ARRIVAL_X = -300,
    START_X_INTERVAL = MAX_START_X - MIN_START_X,
    MAX_ARRIVAL_X = CANVAS_WIDTH + 300,
    ARRIVAL_X_INTERVAL =
    MAX_ARRIVAL_X - MIN_ARRIVAL_X,
    MIN_PLAYER_X = 180,
    MAX_PLAYER_X = CANVAS_WIDTH - 180,
    NUM_COLS_PAGE_LEVEL = 6,
    NUM_ROWS_PAGE_LEVEL = 2,
    GAME_NAME = "downhill_ski",
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_SCORE = "SCORE",
    TEXT_LEVEL_SCORE = "LEVEL SCORE",
    TEXT_GAME_OVER = "GAME OVER",
    TEXT_CONGRATS = "YOU WON!!",
    TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.",
    TEXT_CREDITS_DEVELOPED =
    "DEVELOPED BY",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_ARE_SURE = "ARE YOU SURE?",
    TEXT_SELECT_LEVEL = "SELECT A LEVEL",
    TEXT_LEVEL = "LEVEL",
    TEXT_CLEARED = "CLEARED",
    TEXT_CONFIRM_CLEAR_SAVINGS = "ALL YOUR SAVINGS WILL BE DELETED.ARE YOU SURE?",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, c, e, b, g, l, f, m, p, d;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        d = new createjs.Container;
        s_oStage.addChild(d)
    };
    this.unload = function() {
        d.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded =
        function() {
            this.attachSprites();
            s_oMain.preloaderReady()
        };
    this.attachSprites = function() {
        var t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.addChild(t);
        t = s_oSpriteLibrary.getSprite("200x200");
        f = createBitmap(t);
        f.regX = .5 * t.width;
        f.regY = .5 * t.height;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 80;
        d.addChild(f);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
        d.addChild(m);
        f.mask = m;
        t = s_oSpriteLibrary.getSprite("progress_bar");
        b = createBitmap(t);
        b.x = CANVAS_WIDTH / 2 - t.width / 2;
        b.y = CANVAS_HEIGHT / 2 + 70;
        d.addChild(b);
        a = t.width;
        c = t.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, c);
        d.addChild(g);
        b.mask = g;
        e = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 120;
        e.textBaseline = "alphabetic";
        e.textAlign = "center";
        d.addChild(e);
        t = s_oSpriteLibrary.getSprite("but_start");
        p = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100, t, TEXT_PRELOADER_CONTINUE, "Arial", "#000",
            36, d);
        p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        p.setVisible(!1);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(l);
            d.removeChild(l)
        })
    };
    this._onButStartRelease = function() {
        gdsdk.showBanner();
        s_oMain._allResourcesLoaded()
    };
    this.refreshLoader = function(d) {
        e.text = d + "%";
        100 === d && (p.setVisible(!0), e.visible = !1, b.visible = !1);
        g.graphics.clear();
        d =
            Math.floor(d * a / 100);
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, d, c)
    };
    this._init()
}

function CMain(a) {
    var c, e, b = 0,
        g = 0,
        l = STATE_LOADING,
        f, m, p;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = FPS;
        createjs.Ticker.on("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oLevelSettings = new CLevelSettings;
        f = new CPreloader
    };
    this.setLocalStorageLevel = function(a) {
        var d = getItem(GAME_NAME + "_level");
        if (null === d || d < a) s_iLastLevel = a, saveItem(GAME_NAME + "_level", s_iLastLevel)
    };
    this.setLocalStorageScore = function(a, b) {
        saveItem(GAME_NAME + "_score_level_" + b, a)
    };
    this.clearLocalStorage = function() {
        s_iLastLevel = 1;
        s_bStorageAvailable && localStorage.clear()
    };
    this.getScoreTillLevel = function(a) {
        if (!s_bStorageAvailable) return 0;
        for (var d = 0, b = 0; b < a - 1; b++) d += parseInt(getItem(GAME_NAME + "_score_level_" +
            (b + 1)));
        return d
    };
    this.getScoreLevel = function(a) {
        return getItem(GAME_NAME + "_score_level_" + (a + 1))
    };
    this.getSavedLevel = function() {
        if (!s_bStorageAvailable) return 1;
        var a = getItem(GAME_NAME + "_level");
        return null === a ? 1 : a
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        c = e = !0
    };
    this.soundLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / g * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "level_win",
            loop: !1,
            volume: 1,
            ingamename: "level_win"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "crowd_idle",
            loop: !1,
            volume: 1,
            ingamename: "crowd_idle"
        });
        a.push({
            path: "./sounds/",
            filename: "skiing_direction",
            loop: !1,
            volume: 1,
            ingamename: "skiing_direction"
        });
        a.push({
            path: "./sounds/",
            filename: "falling",
            loop: !1,
            volume: 1,
            ingamename: "falling"
        });
        a.push({
            path: "./sounds/",
            filename: "countdown",
            loop: !1,
            volume: 1,
            ingamename: "countdown"
        });
        a.push({
            path: "./sounds/",
            filename: "go",
            loop: !1,
            volume: 1,
            ingamename: "go"
        });
        a.push({
            path: "./sounds/",
            filename: "arrival",
            loop: !1,
            volume: 1,
            ingamename: "arrival"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        g += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box_wide", "./sprites/msg_box_wide.png");
        s_oSpriteLibrary.addSprite("msg_box_small",
            "./sprites/msg_box_small.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("but_home",
            "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("key_0", "./sprites/key_0.png");
        s_oSpriteLibrary.addSprite("key_1", "./sprites/key_1.png");
        s_oSpriteLibrary.addSprite("but_left", "./sprites/but_left.png");
        s_oSpriteLibrary.addSprite("but_right", "./sprites/but_right.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("logo_menu",
            "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("item_0", "./sprites/item_0.png");
        s_oSpriteLibrary.addSprite("item_1", "./sprites/item_1.png");
        s_oSpriteLibrary.addSprite("item_2", "./sprites/item_2.png");
        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("sponsor", "./sprites/sponsor.png");
        s_oSpriteLibrary.addSprite("countdown_0", "./sprites/countdown_0.png");
        s_oSpriteLibrary.addSprite("countdown_1", "./sprites/countdown_1.png");
        s_oSpriteLibrary.addSprite("countdown_2",
            "./sprites/countdown_2.png");
        s_oSpriteLibrary.addSprite("countdown_3", "./sprites/countdown_3.png");
        s_oSpriteLibrary.addSprite("icon_score", "./sprites/icon_score.png");
        s_oSpriteLibrary.addSprite("but_clear_save", "./sprites/but_clear_save.png");
        for (var a = 0; 87 > a; a++) s_oSpriteLibrary.addSprite("field_loop_" + a, "./sprites/field_loop/field_loop_" + a + ".png");
        for (a = 0; 42 > a; a++) s_oSpriteLibrary.addSprite("arrive_" + a, "./sprites/arrive/arrive_" + a + ".png");
        for (a = 0; 30 > a; a++) s_oSpriteLibrary.addSprite("player_falling_" +
            a, "./sprites/player/falling/player_falling_" + a + ".png");
        for (a = 0; 70 > a; a++) s_oSpriteLibrary.addSprite("player_arrival_" + a, "./sprites/player/arrival/player_arrival_" + a + ".png");
        for (a = 0; 19 > a; a++) s_oSpriteLibrary.addSprite("player_running_" + a, "./sprites/player/running/player_running_" + a + ".png");
        for (a = 0; 8 > a; a++) s_oSpriteLibrary.addSprite("player_left_" + a, "./sprites/player/turn_left/player_left_" + a + ".png"), s_oSpriteLibrary.addSprite("player_right_" + a, "./sprites/player/turn_right/player_right_" + a + ".png");
        for (a =
            0; 7 > a; a++) s_oSpriteLibrary.addSprite("player_left_out_" + a, "./sprites/player/turn_left_out/player_left_out_" + a + ".png"), s_oSpriteLibrary.addSprite("player_right_out_" + a, "./sprites/player/turn_right_out/player_right_out_" + a + ".png");
        for (a = 0; 45 > a; a++) s_oSpriteLibrary.addSprite("tutorial_" + a, "./sprites/help/tutorial_" + a + ".jpg");
        g += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / g * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._allResourcesLoaded = function() {
        f.unload();
        try {
            saveItem("ls_available", "ok"), s_iLastLevel = this.getSavedLevel()
        } catch (d) {
            s_bStorageAvailable = !1
        }
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        s_oMain.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        l = STATE_MENU
    };
    this.gotoLevelMenu = function() {
        m = new CLevelMenu;
        l = STATE_MENU_LEVEL
    };
    this.gotoSelectCar = function() {
        new CMenuSelectCar;
        l = STATE_MENU_SELECT_CAR
    };
    this.gotoGame = function() {
        p = new CGame;
        l = STATE_GAME
    };
    this.levelSelected = function(a) {
        s_iLevelSelected = a;
        m.unload();
        a >= s_iLastLevel && (s_iLastLevel = a);
        s_oMain.gotoGame()
    };
    this.stopUpdateNoBlockAndTick = function() {
        e = !1
    };
    this.startUpdateNoBlockAndTick = function() {
        e = !0
    };
    this.stopUpdateNoBlock = function() {
        c = !1;
        createjs.Ticker.paused = !0
    };
    this.startUpdateNoBlock = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate =
        function() {
            s_iPrevTime = (new Date).getTime();
            c = !0;
            createjs.Ticker.paused = !1;
            $("#block_game").css("display", "none");
            (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
        };
    this.isUpdating = function() {
        return c
    };
    this._update = function(a) {
        if (!1 !== c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            l === STATE_GAME && e && p.update();
            void 0 !== s_oStage && s_oStage.update(a)
        }
    };
    s_oMain = this;
    HERO_ACCELERATION = a.hero_acceleration;
    HERO_FRICTION = a.hero_friction;
    MAX_HERO_SPEED = a.max_hero_speed;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oSoundTrack = null,
    s_oDrawLayer, s_oStage, s_oMain = null,
    s_oSpriteLibrary, s_oLevelSettings, s_iLastLevel, s_iLevelSelected = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0;

function CTextButton(a, c, e, b, g, l, f, m) {
    var p, d, t, h, k, u, q, x, v;
    this._init = function(a, b, f, e, c, g, l, m) {
        p = !1;
        h = [];
        k = [];
        v = createBitmap(f);
        d = f.width;
        t = f.height;
        x = new createjs.Text(e, l + "px " + c, g);
        x.textAlign = "center";
        x.textBaseline = "alphabetic";
        x.lineWidth = .9 * d;
        x.x = f.width / 2;
        x.y = Math.floor(f.height / 2) + 15;
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        q.regX = f.width / 2;
        q.regY = f.height / 2;
        s_bMobile || (q.cursor = "pointer");
        q.addChild(v, x);
        !1 !== m && s_oStage.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown");
        q.off("pressup");
        s_oStage.removeChild(q)
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    this.setAlign = function(a) {
        x.textAlign = a
    };
    this.enable = function() {
        p = !1;
        v.filters = [];
        v.cache(0, 0, d, t)
    };
    this.disable = function() {
        p = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        v.filters = [new createjs.ColorMatrixFilter(a)];
        v.cache(0, 0, d, t)
    };
    this._initListener = function() {
        q.on("mousedown", this.buttonDown);
        q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        h[a] = b;
        k[a] =
            d
    };
    this.addEventListenerWithParams = function(a, b, d, f) {
        h[a] = b;
        k[a] = d;
        u = f
    };
    this.buttonRelease = function() {
        p || (playSound("click", 1, !1), q.scaleX = 1, q.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], u))
    };
    this.buttonDown = function() {
        p || (q.scaleX = .9, q.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.changeText = function(a) {
        x.text = a
    };
    this.setX = function(a) {
        q.x = a
    };
    this.setY = function(a) {
        q.y = a
    };
    this.getButtonImage = function() {
        return q
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this.getSprite = function() {
        return q
    };
    this._init(a, c, e, b, g, l, f, m);
    return this
}

function CGfxButton(a, c, e, b) {
    var g, l, f, m, p = [],
        d, t, h;
    this._init = function(a, d, e) {
        g = !1;
        l = 1;
        f = [];
        m = [];
        h = createBitmap(e);
        h.x = a;
        h.y = d;
        h.regX = e.width / 2;
        h.regY = e.height / 2;
        h.cursor = "pointer";
        b.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", d);
        h.off("pressup", t);
        b.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this._initListener = function() {
        d = h.on("mousedown", this.buttonDown);
        t = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        f[a] = b;
        m[a] = d
    };
    this.addEventListenerWithParams =
        function(a, b, d, h) {
            f[a] = b;
            m[a] = d;
            p = h
        };
    this.enable = function() {
        g = !1
    };
    this.disable = function() {
        g = !0
    };
    this.buttonRelease = function() {
        g || (playSound("click", 1, !1), h.scaleX = l, h.scaleY = l, f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(m[ON_MOUSE_UP], p))
    };
    this.buttonDown = function() {
        g || (h.scaleX = .9 * l, h.scaleY = .9 * l, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN], p))
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.setScale = function(a) {
        l = a;
        h.scaleX = h.scaleY =
            a
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(a, c, e)
}

function CSideGfxButton(a, c, e, b, g) {
    var l, f = c,
        m, p, d, t, h = [],
        k, u, q;
    this._init = function(a, b, f, h) {
        l = !1;
        d = [];
        t = [];
        q = createBitmap(h);
        q.y = f;
        p = h.width;
        a ? (q.x = -h.width, q.regX = 0) : (q.x = CANVAS_WIDTH + h.width, q.regX = h.width);
        m = q.x;
        q.regY = h.height / 2;
        q.cursor = "pointer";
        g.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown", k);
        q.off("pressup", u);
        g.removeChild(q)
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    this._initListener = function() {
        k = q.on("mousedown", this.buttonDown);
        u = q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, h) {
        d[a] = b;
        t[a] = h
    };
    this.addEventListenerWithParams = function(a, b, f, e) {
        d[a] = b;
        t[a] = f;
        h = e
    };
    this.enable = function() {
        l = !1
    };
    this.disable = function() {
        l = !0
    };
    this.buttonRelease = function() {
        l || (playSound("click", 1, !1), q.scaleX = 1, q.scaleY = 1, d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(t[ON_MOUSE_UP], h))
    };
    this.buttonDown = function() {
        l || (q.scaleX = .9, q.scaleY = .9, d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN], h))
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setX = function(a) {
        q.x =
            a
    };
    this.setY = function(a) {
        q.y = a
    };
    this.resetX = function() {
        q.x = a ? -p : CANVAS_WIDTH + p
    };
    this.setFinalX = function(b) {
        f = b;
        m = a ? f - p : f + p
    };
    this.tweenFinalX = function() {
        createjs.Tween.get(q).to({
            x: f
        }, 300, createjs.Ease.quartOut).call(function() {
            d[ON_BUT_END_TWEEN_X] && d[ON_BUT_END_TWEEN_X].call(t[ON_BUT_END_TWEEN_X])
        })
    };
    this.tweenStartX = function(a) {
        createjs.Tween.get(q).wait(a).to({
            x: m
        }, 300, createjs.Ease.quartOut)
    };
    this.getButtonImage = function() {
        return q
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this._init(a, c, e, b);
    return this
}

function CSideToggle(a, c, e, b, g, l, f) {
    var m, p = e,
        d, t, h, k;
    this._init = function(a, b, e, c, g) {
        t = [];
        h = [];
        b = 0;
        !1 === a && (b = c.width / 2);
        var l = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: b,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = g;
        k = createSprite(l, "state_" + m, b, c.height / 2, c.width / 2, c.height);
        k.x = a ? -c.width / 2 : CANVAS_WIDTH + c.width / 2;
        d = k.x;
        k.y = e;
        k.stop();
        k.cursor = "pointer";
        f.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        f.removeChild(k)
    };
    this._initListener = function() {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        t[a] = b;
        h[a] = d
    };
    this.setActive = function(a) {
        m = a;
        k.gotoAndStop("state_" + m)
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        playSound("click", 1, !1);
        m = !m;
        k.gotoAndStop("state_" + m);
        t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(h[ON_MOUSE_UP], m)
    };
    this.buttonDown = function() {
        k.scaleX = .9;
        k.scaleY = .9;
        t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setY = function(a) {
        k.y = a
    };
    this.setFinalX = function(a) {
        p = a
    };
    this.tweenFinalX = function() {
        createjs.Tween.get(k).wait(c).to({
            x: p
        }, 300, createjs.Ease.quartOut).call(function() {
            t[ON_BUT_END_TWEEN_X] && t[ON_BUT_END_TWEEN_X].call(h[ON_BUT_END_TWEEN_X])
        })
    };
    this.tweenStartX = function(a) {
        createjs.Tween.get(k).wait(a).to({
            x: d
        }, 300, createjs.Ease.quartOut)
    };
    this.getButtonImage = function() {
        return k
    };
    this._init(a, e, b, g, l)
}

function CMenu() {
    var a, c, e, b, g, l, f, m, p, d, t, h, k, u, q, x, v, A = null,
        E = null;
    this._init = function() {
        p = !0;
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        t = new CGfxButton(CANVAS_WIDTH / 2 + 250, CANVAS_HEIGHT / 2 + 90, s_oSpriteLibrary.getSprite("but_play"), s_oStage);
        t.addEventListener(ON_MOUSE_UP, this._onButPlaySingle, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var B = s_oSpriteLibrary.getSprite("audio_icon");
            f = CANVAS_WIDTH;
            m = B.height / 2 + 10;
            h = new CSideToggle(!1, 0, f - s_iOffsetX, m + s_iOffsetY,
                B, s_bAudioActive, s_oStage);
            h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            e = CANVAS_WIDTH;
            b = m + B.height + 10;
            h.tweenFinalX()
        } else e = CANVAS_WIDTH, b = B.height / 2 + 10;
        B = s_oSpriteLibrary.getSprite("but_credits");
        g = 0;
        l = B.height / 2 + 10;
        k = new CSideGfxButton(!0, g + s_iOffsetX, l + s_iOffsetY, B, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this);
        k.addEventListener(ON_BUT_END_TWEEN_X, this._onButEndTween, this);
        a = 0;
        c = CANVAS_HEIGHT - B.height / 2 - 10;
        u = new CSideGfxButton(!0, a + s_iOffsetX, c - s_iOffsetY,
            s_oSpriteLibrary.getSprite("but_clear_save"), s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
        B = window.document;
        var z = B.documentElement;
        A = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
        E = B.exitFullscreen || B.mozCancelFullScreen || B.webkitExitFullscreen || B.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && screenfull.enabled && (B = s_oSpriteLibrary.getSprite("but_fullscreen"), x = new CSideToggle(!1, 200, e - s_iOffsetX, b + s_iOffsetY, B, s_bFullscreen,
            s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this), x.tweenFinalX());
        B = createBitmap(s_oSpriteLibrary.getSprite("logo_menu"));
        B.x = 450;
        B.y = 60;
        s_oStage.addChild(B);
        v = new CAreYouSurePanel;
        v.addEventListener(ON_BUT_YES_DOWN, this._onConfirmClear, this);
        s_bStorageAvailable || new CAlertSavingBox(TEXT_ERR_LS, s_oStage);
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 400).call(function() {
            q.visible = !1
        });
        k.tweenFinalX();
        u.tweenFinalX();
        setVolume("soundtrack", 1)
    };
    this.unload = function() {
        t.unload();
        k.unload();
        u.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
        A && screenfull.enabled && x.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function() {
        p || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(f - s_iOffsetX, s_iOffsetY + m), A && screenfull.enabled && x.setPosition(e - s_iOffsetX, b + s_iOffsetY), k.setPosition(g + s_iOffsetX, l + s_iOffsetY), u.setPosition(a +
            s_iOffsetX, c - s_iOffsetY))
    };
    this._onButPlaySingle = function() {
        s_oMenu.unload();
        s_oMain.gotoLevelMenu();
        $(s_oMain).trigger("start_session")
    };
    this._onButCreditsRelease = function() {
        new CCreditsPanel
    };
    this._onButClearRelease = function() {
        v.show(TEXT_CONFIRM_CLEAR_SAVINGS)
    };
    this._onButEndTween = function() {
        p = !1
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        A && screenfull.enabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease =
        function() {
            s_bFullscreen ? E.call(window.document) : A.call(window.document.documentElement);
            sizeHandler()
        };
    this._onConfirmClear = function() {
        s_oMain.clearLocalStorage()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame() {
    var a = !1,
        c, e, b, g, l, f, m, p, d, t, h, k, u, q, x, v, A, E, B, z, C, I, M, r, H, O, K;
    this._init = function() {
        p = s_iLevelSelected;
        f = s_oMain.getScoreTillLevel(p);
        A = [{
            x: 10,
            y: 0
        }, {
            x: -20,
            y: 0
        }, {
            x: 10,
            y: -10
        }, {
            x: 0,
            y: 20
        }, {
            x: 10,
            y: -10
        }, {
            x: -10,
            y: 0
        }, {
            x: 10,
            y: 0
        }, {
            x: -20,
            y: 0
        }, {
            x: 10,
            y: -10
        }, {
            x: 0,
            y: 20
        }, {
            x: 10,
            y: -10
        }, {
            x: -10,
            y: 0
        }];
        var a = s_oSpriteLibrary.getSprite("bg_game");
        C = new createjs.Container;
        C.x = a.width / 2;
        C.y = CANVAS_HEIGHT / 2;
        C.regX = a.width / 2;
        C.regY = 424;
        s_oStage.addChild(C);
        E = createBitmap(a);
        E.x = -50;
        C.addChild(E);
        B = new CField(-50,
            220, C);
        B.addEventListener(ON_READY_FOR_PLAYER_ARRIVAL, this.playArrival, this);
        I = new createjs.Container;
        C.addChild(I);
        r = new CPlayer(CANVAS_WIDTH / 2, 850, I);
        r.addEventListener(ON_PLAYER_ARRIVAL, this._onWinLevel, this);
        r.addEventListener(ON_PLAYER_FALL, this._onEndLevel, this);
        M = new CCountdownController(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 150, s_oStage);
        M.addEventListener(ON_END_COUNTDOWN, this.startRace, this);
        z = new CInterface(f);
        this.reset();
        H = new CHelpPanel;
        H.show();
        O = new CEndPanel;
        O.addEventListener(ON_RESTART,
            this.restart, this);
        O.addEventListener(ON_BACK_MENU, this.onExit, this);
        K = new CNextLevelPanel;
        K.addEventListener(ON_RESTART, this.restart, this);
        K.addEventListener(ON_BACK_MENU, this.onExit, this);
        K.addEventListener(ON_NEXT_LEVEL, this._onNextLevel, this);
        setVolume("soundtrack", .4)
    };
    this.unload = function() {
        a = !1;
        z.unload();
        s_oStage.removeAllChildren()
    };
    this.reset = function() {
        c = l = b = e = g = !1;
        d = m = 0;
        x = [];
        t = s_oLevelSettings.getEnemiesSpawn(p);
        h = s_oLevelSettings.getStartingEnemySpawn(p);
        s_oLevelSettings.getEnemySpawnNumber(p);
        f = s_oMain.getScoreTillLevel(p);
        k = parseFloat((-334 / t).toFixed(2));
        E.y = 0;
        r.reset();
        z.reset(f, p);
        M.reset();
        B.reset();
        $(s_oMain).trigger("start_level", p)
    };
    this.restart = function() {
        $(s_oMain).trigger("restart_level", p);
        for (var a = 0; a < x.length; a++) x[a].unload();
        this.reset();
        this.startCountdown()
    };
    this.refreshButtonPos = function() {
        z.refreshButtonPos()
    };
    this.onKeyDown = function(d) {
        if (!a || l || r.getCurAnim() === PLAYER_ANIM_ARRIVAL) return d.preventDefault(), !1;
        d || (d = window.event);
        switch (d.keyCode) {
            case 37:
                e = !0;
                r.moveLeft(!0);
                break;
            case 39:
                b = !0, r.moveRight(!0)
        }
        d.preventDefault();
        return !1
    };
    this.onKeyUp = function(d) {
        if (!a || l || r.getCurAnim() === PLAYER_ANIM_ARRIVAL) return d.preventDefault(), !1;
        d || (d = window.event);
        b = e = !1;
        switch (d.keyCode) {
            case 37:
                r.moveLeft(!1);
                break;
            case 39:
                r.moveRight(!1)
        }
        d.preventDefault();
        return !1
    };
    this.moveLeft = function(b) {
        !a || b && e || l || r.getCurAnim() === PLAYER_ANIM_ARRIVAL || (e = b, r.moveLeft(b))
    };
    this.moveRight = function(d) {
        !a || d && b || l || r.getCurAnim() === PLAYER_ANIM_ARRIVAL || (b = d, r.moveRight(d))
    };
    this.startCountdown =
        function() {
            r.show();
            B.show();
            M.start();
            a = !0
        };
    this.startRace = function() {
        this._spawnEnemy()
    };
    this._createSpawnArray = function() {
        v = [];
        for (var a = ARRIVAL_X_INTERVAL / 5, b = MIN_ARRIVAL_X, d = 0; 6 > d; d++) v.push(b), b += a;
        v = shuffle(v)
    };
    this.onExitFromHelp = function() {
        this.startCountdown()
    };
    this._spawnEnemy = function() {
        c = !0;
        if (0 !== t) {
            t--;
            var a = !1;
            0 === t ? g = a = !0 : 2 === t && B.prepareSponsorsForStop();
            var b = Math.floor(3 * Math.random());
            if (.3 < Math.random()) var d = r.getX() - CANVAS_WIDTH / 2 + r.getX();
            else this._createSpawnArray(), d = v.pop();
            a = new COpponent(a, (d - MIN_ARRIVAL_X) / ARRIVAL_X_INTERVAL * START_X_INTERVAL + MIN_START_X, 500, d, b, I);
            a.addEventListener(ON_OPPONENT_HIDE, this.checkArrival, this);
            a.addEventListener(ON_OPPONENT_CHECK_COLLISION, this.checkCollision, this);
            x.push(a);
            a = E.y + k;
            (new createjs.Tween.get(E)).to({
                y: a
            }, h)
        }
    };
    this.checkArrival = function(a) {
        a && !l && (B.readyForArrival(), playSound("crowd_idle", 1, !1))
    };
    this.checkCollision = function(a, b) {
        if (!l) {
            var d = r.getRect(),
                h = Math.abs(a.x - d.x);
            if (d.intersects(a)) {
                l = !0;
                u = 0;
                var f = this;
                q = setInterval(function() {
                        f.tremble()
                    },
                    20);
                r.changeAnim(PLAYER_ANIM_FALL)
            } else this.refreshScore(Math.floor(h / 200));
            I.swapChildren(b, r.getContainer())
        }
    };
    this.tremble = function() {
        var a = A[u];
        C.x += a.x;
        C.y += a.y;
        u++;
        u === A.length && (u = 0, clearInterval(q))
    };
    this.refreshScore = function(a) {
        m += a;
        f += a;
        z.refreshScore(f)
    };
    this.playArrival = function() {
        b = e = !1;
        r.changeAnim(PLAYER_ANIM_ARRIVAL)
    };
    this._manageOpponentDepth = function() {
        I.sortChildren(function(a, b, d) {
            return a.y > b.y ? 1 : a.y < b.y ? -1 : 0
        })
    };
    this._onEndLevel = function() {
        $(s_oMain).trigger("end_level", p);
        B.stopAnim();
        for (var a = 0; a < x.length; a++) x[a].stopUpdate();
        setTimeout(function() {
            O.show(f, TEXT_GAME_OVER)
        }, 500)
    };
    this._onWinLevel = function() {
        $(s_oMain).trigger("end_level", p);
        $(s_oMain).trigger("save_score", f);
        p === NUM_LEVELS ? setTimeout(function() {
            O.show(f, TEXT_CONGRATS)
        }, 500) : (s_oMain.setLocalStorageLevel(p + 1), s_oMain.setLocalStorageScore(m, p), setTimeout(function() {
            K.show(m, f, p)
        }, 500))
    };
    this._onNextLevel = function() {
        p++;
        this.reset();
        this.startCountdown()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", f)
    };
    this.getPlayerX = function() {
        return r.getX()
    };
    this.update = function() {
        H.isVisible() && H.update();
        if (!1 !== a) {
            e && -4 < C.rotation ? C.rotation -= .5 : b && 4 > C.rotation ? C.rotation += .5 : !1 === e && !1 === b && (0 < C.rotation ? C.rotation -= .5 : 0 > C.rotation && (C.rotation += .5));
            r.update();
            B.update();
            this._manageOpponentDepth();
            for (var f = 0; f < x.length; f++) x[f].update();
            !l && c && (d += s_iTimeElaps, !g && d > h && (d = 0, this._spawnEnemy()))
        }
    };
    s_oGame = this;
    this._init()
}
var s_oGame = null;

function CInterface(a) {
    var c, e, b, g, l, f, m, p, d, t, h, k, u, q, x, v, A, E, B, z, C, I, M, r, H, O, K = null,
        R = null,
        Q, T, P, N;
    this._init = function(a) {
        if (s_bMobile) {
            var D = s_oSpriteLibrary.getSprite("but_left");
            l = D.width / 2 + 150;
            f = CANVAS_HEIGHT - D.height / 2 - 50;
            H = new CGfxButton(l, f, D, s_oStage);
            H.addEventListener(ON_MOUSE_DOWN, this._onLeftDown, this);
            H.addEventListener(ON_MOUSE_UP, this._onLeftUp, this);
            D = s_oSpriteLibrary.getSprite("but_right");
            b = CANVAS_WIDTH - D.width / 2 - 150;
            g = CANVAS_HEIGHT - D.height / 2 - 50;
            O = new CGfxButton(b, g, D, s_oStage);
            O.addEventListener(ON_MOUSE_DOWN, this._onRightDown, this);
            O.addEventListener(ON_MOUSE_UP, this._onRightUp, this)
        } else document.onkeydown = s_oGame.onKeyDown, document.onkeyup = s_oGame.onKeyUp;
        D = s_oSpriteLibrary.getSprite("but_settings");
        var n = CANVAS_WIDTH,
            J = D.height / 2 + 10;
        Q = new CGUIExpandible(n, J, D, s_oStage);
        D = s_oSpriteLibrary.getSprite("but_exit");
        u = n;
        q = J + D.height + 10;
        C = new CSideGfxButton(!1, u - s_iOffsetX, q, D, s_oStage);
        C.addEventListener(ON_MOUSE_UP, this._onExit, this);
        D = s_oSpriteLibrary.getSprite("but_pause");
        c = CANVAS_WIDTH;
        e = q + D.height + 10;
        r = new CSideGfxButton(!1, c - s_iOffsetX, e, D, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onPause, this);
        n = 100;
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (D = s_oSpriteLibrary.getSprite("audio_icon"), x = CANVAS_WIDTH, v = e + D.height + 10, I = new CSideToggle(!1, n, x - s_iOffsetX, v, D, s_bAudioActive, s_oStage), I.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), m = CANVAS_WIDTH, p = v + D.height + 10, n += 100) : (m = CANVAS_WIDTH, p = e + D.height + 10);
        D = window.document;
        J = D.documentElement;
        K = J.requestFullscreen ||
            J.mozRequestFullScreen || J.webkitRequestFullScreen || J.msRequestFullscreen;
        R = D.exitFullscreen || D.mozCancelFullScreen || D.webkitExitFullscreen || D.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (K = !1);
        K && screenfull.enabled && (D = s_oSpriteLibrary.getSprite("but_fullscreen"), M = new CSideToggle(!1, n, m - s_iOffsetX, p + s_iOffsetY, D, s_bFullscreen, s_oStage), M.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        Q.addButton(C);
        Q.addButton(r);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Q.addButton(I);
        K && screenfull.enabled &&
            Q.addButton(M);
        D = s_oSpriteLibrary.getSprite("score_panel");
        h = 0;
        k = 10;
        P = new createjs.Container;
        P.x = h;
        P.y = k;
        s_oStage.addChild(P);
        n = createBitmap(D);
        P.addChild(n);
        B = new createjs.Text(TEXT_SCORE, "30px " + FONT_GAME, "#fff");
        B.x = 10;
        B.y = 34;
        B.textBaseline = "alphabetic";
        B.textAlign = "left";
        P.addChild(B);
        E = new createjs.Text(a, "30px " + FONT_GAME, "#fff");
        E.x = B.x + B.getBounds().width + 20;
        E.y = B.y;
        E.textBaseline = "alphabetic";
        E.textAlign = "left";
        P.addChild(E);
        d = 0;
        t = CANVAS_HEIGHT - D.height - 10;
        N = new createjs.Container;
        N.x = d;
        N.y = t;
        s_oStage.addChild(N);
        a = createBitmap(D);
        N.addChild(a);
        z = new createjs.Text(TEXT_LEVEL + " " + s_iLevelSelected, "30px " + FONT_GAME, "#fff");
        z.x = 10;
        z.y = 34;
        z.textBaseline = "alphabetic";
        z.textAlign = "left";
        N.addChild(z);
        T = new CAreYouSurePanel;
        T.addEventListener(ON_BUT_YES_DOWN, this._onExitYes, this);
        A = new CRollingScore;
        this.refreshButtonPos()
    };
    this.unload = function() {
        C.unload();
        C = null;
        Q.unload();
        T.unload();
        !1 === DISABLE_SOUND_MOBILE && (I.unload(), I = null);
        K && screenfull.enabled && M.unload();
        s_bMobile ? (H.unload(),
            O.unload()) : (document.onkeydown = null, document.onkeyup = null);
        s_oStage.removeAllChildren();
        s_oInterface = null
    };
    this.reset = function(a, b) {
        E.text = a;
        z.text = TEXT_LEVEL + " " + b
    };
    this.refreshButtonPos = function() {
        P.x = h + s_iOffsetX;
        P.y = k + s_iOffsetY;
        N.x = d + s_iOffsetX;
        N.y = t - s_iOffsetY;
        Q.refreshPos();
        Q.isExpanded() ? (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || I.setPosition(x - s_iOffsetX, s_iOffsetY + v), K && screenfull.enabled && M.setPosition(m - s_iOffsetX, p + s_iOffsetY), C.setPosition(u - s_iOffsetX, q + s_iOffsetY), r.setPosition(c -
            s_iOffsetX, e + s_iOffsetY)) : (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || I.setY(s_iOffsetY + v), K && screenfull.enabled && M.setY(p + s_iOffsetY), C.setY(q + s_iOffsetY), r.setY(e + s_iOffsetY), C.resetX(), r.resetX());
        s_bMobile && (H.setPosition(l + s_iOffsetX, f - s_iOffsetY), O.setPosition(b - s_iOffsetX, g - s_iOffsetY))
    };
    this.refreshScore = function(a) {
        A.rolling(E, null, a)
    };
    this._onLeftDown = function() {
        s_oGame.moveLeft(!0)
    };
    this._onRightDown = function() {
        s_oGame.moveRight(!0)
    };
    this._onLeftUp = function() {
        s_oGame.moveLeft(!1)
    };
    this._onRightUp =
        function() {
            s_oGame.moveRight(!1)
        };
    this._onExit = function() {
        T.show(TEXT_ARE_SURE)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onPause = function() {
        s_oMain.isUpdating() ? s_oMain.stopUpdateNoBlock() : s_oMain.startUpdateNoBlock()
    };
    this.resetFullscreenBut = function() {
        K && screenfull.enabled && M.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? R.call(window.document) : K.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExitYes =
        function() {
            s_oGame.onExit()
        };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CHelpPanel() {
    var a, c, e, b, g, l, f, m, p, d = this;
    this._init = function() {
        p = new createjs.Container;
        p.visible = !1;
        s_oStage.addChild(p);
        b = new createjs.Shape;
        b.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e = b.on("click", function() {});
        p.addChild(b);
        var a = s_oSpriteLibrary.getSprite("msg_box_wide"),
            d = createBitmap(a);
        d.regX = a.width / 2;
        d.regY = a.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        p.addChild(d);
        a = [];
        for (d = 0; 45 > d; d++) a.push(s_oSpriteLibrary.getSprite("tutorial_" + d));
        d = a[0].width;
        var k = a[0].height;
        a = new createjs.SpriteSheet({
            images: a,
            framerate: 15,
            frames: {
                width: d,
                height: k,
                regX: d / 2
            },
            animations: {
                start: 0,
                anim: [0, a.length - 1]
            }
        });
        f = createSprite(a, "start", d / 2, 0, d, k);
        f.x = CANVAS_WIDTH / 2;
        f.y = 130;
        p.addChild(f);
        c = [];
        s_bMobile ? (a = s_oSpriteLibrary.getSprite("but_left"), d = s_oSpriteLibrary.getSprite("but_right")) : (a = s_oSpriteLibrary.getSprite("key_0"), d = s_oSpriteLibrary.getSprite("key_1"));
        g = createBitmap(a);
        g.regX = a.width / 2;
        g.regY = a.height / 2;
        g.x = CANVAS_WIDTH / 2 - 240;
        g.y = CANVAS_HEIGHT /
            2 + 40;
        p.addChild(g);
        c.push(g);
        l = createBitmap(d);
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        l.x = CANVAS_WIDTH / 2 + 240;
        l.y = CANVAS_HEIGHT / 2 + 40;
        p.addChild(l);
        c.push(l);
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 180, s_oSpriteLibrary.getSprite("but_next"), p);
        m.addEventListener(ON_MOUSE_UP, this._onStart, this)
    };
    this.unload = function() {
        b.off("click", e)
    };
    this.show = function() {
        a = 0;
        l.scaleX = l.scaleY = .9;
        f.gotoAndPlay("anim");
        p.alpha = 0;
        p.visible = !0;
        createjs.Tween.get(p).to({
            alpha: 1
        }, 500)
    };
    this.hide = function() {
        createjs.Tween.get(p).to({
                alpha: 0
            },
            500, createjs.Ease.cubicOut).call(function() {
            p.visible = !1
        })
    };
    this._attachPlayer = function(a, b, d, f) {
        d = [];
        for (var e = 0; 18 > e; e++) d.push(s_oSpriteLibrary.getSprite("player_running_" + e));
        e = d[0].width;
        var h = d[0].height;
        d = new createjs.SpriteSheet({
            images: d,
            frames: {
                width: e,
                height: h,
                regX: e / 2,
                regY: h
            },
            animations: {
                start: 0,
                anim: [0, d.length - 1, f]
            }
        });
        d = createSprite(d, "start", e / 2, h, e, h);
        d.scaleX = d.scaleY = .7;
        d.x = a;
        d.y = b;
        p.addChild(d);
        return d
    };
    this._toggleKeyAnims = function() {
        .9 === l.scaleX ? (l.scaleX = l.scaleY = 1, g.scaleX =
            g.scaleY = .9) : (g.scaleX = g.scaleY = 1, l.scaleX = l.scaleY = .9)
    };
    this._onStart = function() {
        m.disable();
        d.hide();
        s_oGame.onExitFromHelp()
    };
    this.isVisible = function() {
        return p.visible
    };
    this.update = function() {
        a += s_iTimeElaps;
        1500 < a && (a = 0, this._toggleKeyAnims())
    };
    this._init()
}

function CLevelSettings() {
    var a, c, e;
    this._init = function() {
        a = [20, 30, 40, 50, 60, 70, 80, 80, 90, 90, 100, 100];
        c = [1300, 1100, 900, 800, 800, 700, 700, 600, 600, 500, 500, 400];
        e = [1, 1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 2];
        NUM_LEVELS = a.length
    };
    this.getEnemiesSpawn = function(b) {
        return a[b - 1]
    };
    this.getStartingEnemySpawn = function(a) {
        return c[a - 1]
    };
    this.getEnemySpawnNumber = function(a) {
        return e[a - 1]
    };
    this._init()
}

function CLevelMenu() {
    var a, c, e, b, g, l, f, m, p, d, t, h, k, u, q, x, v, A, E, B, z, C = null,
        I = null;
    this._init = function() {
        f = !0;
        m = 0;
        B = new createjs.Container;
        s_oStage.addChild(B);
        var t = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        B.addChild(t);
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.alpha = .5;
        B.addChild(q);
        x = new createjs.Container;
        x.x = CANVAS_WIDTH / 2;
        B.addChild(x);
        u = s_oSpriteLibrary.getSprite("msg_box_wide");
        t = createBitmap(u);
        x.addChild(t);
        E = new createjs.Text(TEXT_SELECT_LEVEL,
            "70px " + FONT_GAME, "#fff");
        E.x = u.width / 2;
        E.y = 100;
        E.textAlign = "center";
        E.shadow = new createjs.Shadow("#000000", 2, 2, 5);
        E.textBaseline = "alphabetic";
        x.addChild(E);
        var r = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH;
        l = r.height / 2 + 10;
        v = new CSideGfxButton(!1, g - s_iOffsetX, l + s_iOffsetY, r, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onExit, this);
        v.addEventListener(ON_BUT_END_TWEEN_X, this._onButEndTween, this);
        x.regX = u.width / 2;
        x.regY = u.height / 2;
        p = -u.height / 2;
        d = r.height;
        t = 100;
        !1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile ? (r = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH, b = l + r.height + 10, A = new CSideToggle(!1, t, e - s_iOffsetX, b + s_iOffsetY, r, s_bAudioActive, s_oStage), A.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), a = CANVAS_WIDTH, c = b + r.height + 10, t += 100, A.tweenFinalX()) : (a = CANVAS_WIDTH, c = l + r.height + 10);
        r = window.document;
        var H = r.documentElement;
        C = H.requestFullscreen || H.mozRequestFullScreen || H.webkitRequestFullScreen || H.msRequestFullscreen;
        I = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen ||
            r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (C = !1);
        C && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), z = new CSideToggle(!1, t, a - s_iOffsetX, c + s_iOffsetY, r, s_bFullscreen, s_oStage), z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this), z.tweenFinalX());
        this._checkBoundLimits();
        h = [];
        t = Math.floor((u.width - 100) / NUM_COLS_PAGE_LEVEL) / 2;
        for (H = r = 0; H < NUM_COLS_PAGE_LEVEL; H++) h.push(r), r += 2 * t;
        k = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        this.refreshButtonPos();
        q.alpha = 0;
        x.y = p;
        B.visible = !0;
        v.tweenFinalX();
        createjs.Tween.get(q).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(x).to({
            y: CANVAS_HEIGHT / 2
        }, 500, createjs.Ease.quartOut)
    };
    this.unload = function() {
        for (var a = 0; a < t.length; a++) t[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || A.unload();
        C && screenfull.enabled && z.unload();
        v.unload();
        s_oStage.removeAllChildren();
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function() {
        f || (v.setPosition(g - s_iOffsetX, l + s_iOffsetY), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || A.setPosition(e - s_iOffsetX, s_iOffsetY +
            b), C && screenfull.enabled && z.setPosition(a - s_iOffsetX, c + s_iOffsetY))
    };
    this._checkBoundLimits = function() {
        for (var a = s_oSpriteLibrary.getSprite("but_level"), b = 0, f = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * d, e = 0; b < f;) b += a.height + 20, e++;
        NUM_ROWS_PAGE_LEVEL > e && (NUM_ROWS_PAGE_LEVEL = e);
        f = b = 0;
        e = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); f < e;) f += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function(a, b) {
        var d = new createjs.Container;
        x.addChild(d);
        k.push(d);
        t = [];
        for (var f = 0, e = 0, c = 1, g = !1, l = s_oSpriteLibrary.getSprite("but_level"), m = a; m < b; m++) {
            var p = null;
            if (m + 1 > s_iLastLevel) var r = !1;
            else r = !0, p = s_oMain.getScoreLevel(m);
            r = new CLevelBut(h[f] + l.width / 4, e + l.height / 2, m + 1, p, l, r, d);
            r.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, m);
            t.push(r);
            f++;
            if (f === h.length && (f = 0, e += l.height + 70, c++, c > NUM_ROWS_PAGE_LEVEL && m !== b - 1)) {
                g = !0;
                break
            }
        }
        d.x = u.width / 2;
        d.y = u.height / 2;
        d.regX = d.getBounds().width / 2;
        d.regY = d.getBounds().height / 2;
        g && this._createNewLevelPage(m +
            1, b)
    };
    this._onRight = function() {
        k[m].visible = !1;
        m++;
        m >= k.length && (m = 0);
        k[m].visible = !0
    };
    this._onLeft = function() {
        k[m].visible = !1;
        m--;
        0 > m && (m = k.length - 1);
        k[m].visible = !0
    };
    this._onButLevelRelease = function(a) {
        s_oLevelMenu.unload();
        s_oMain.levelSelected(a + 1)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        C && screenfull.enabled && z.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? I.call(window.document) :
            C.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButEndTween = function() {
        f = !1
    };
    this._onExit = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CLevelBut(a, c, e, b, g, l, f) {
    var m, p, d, t = [],
        h = [],
        k, u, q, x;
    this._init = function(a, b, f, e, h, c) {
        p = [];
        d = [];
        x = new createjs.Container;
        v.addChild(x);
        var g = new createjs.SpriteSheet({
            images: [h],
            frames: {
                width: h.width / 2,
                height: h.height,
                regX: h.width / 2 / 2,
                regY: h.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = c;
        q = createSprite(g, "state_" + m, h.width / 2 / 2, h.height / 2, h.width / 2, h.height);
        q.mouseEnabled = c;
        q.x = a;
        q.y = b;
        q.stop();
        s_bMobile || (x.cursor = "pointer");
        x.addChild(q);
        t.push(q);
        k = new createjs.Text(f, "50px " +
            FONT_GAME, "#fff");
        k.x = a;
        k.y = b + 2;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        x.addChild(k);
        f = s_oSpriteLibrary.getSprite("icon_score");
        f = createBitmap(f);
        f.x = a - 40;
        f.y = b + 22;
        x.addChild(f);
        null === e && (e = 0);
        u = new createjs.Text(e, "20px " + FONT_GAME, "#fff");
        u.x = a + 40;
        u.y = b + 37;
        u.textAlign = "right";
        u.textBaseline = "alphabetic";
        x.addChild(u);
        c || (k.color = "#b4b4b4");
        this._initListener()
    };
    this.unload = function() {
        x.off("mousedown", this.buttonDown);
        x.off("pressup", this.buttonRelease);
        x.removeChild(q)
    };
    this._initListener =
        function() {
            x.on("mousedown", this.buttonDown);
            x.on("pressup", this.buttonRelease)
        };
    this.viewBut = function(a) {
        x.addChild(a)
    };
    this.addEventListener = function(a, b, f) {
        p[a] = b;
        d[a] = f
    };
    this.addEventListenerWithParams = function(a, b, f, e) {
        p[a] = b;
        d[a] = f;
        h = e
    };
    this.ifClickable = function() {
        return !0 === x.mouseEnabled ? 1 : 0
    };
    this.setActive = function(a, b) {
        m = b;
        t[a].gotoAndStop("state_" + m);
        t[a].mouseEnabled = !0;
        k.color = m ? "#00397a" : "#b4b4b4"
    };
    this.buttonRelease = function() {
        m && (playSound("click", 1, !1), p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(d[ON_MOUSE_UP],
            h))
    };
    this.buttonDown = function() {
        p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], h)
    };
    this.setPosition = function(a, b) {
        x.x = a;
        x.y = b
    };
    this.setVisible = function(a) {
        x.visible = a
    };
    var v = f;
    this._init(a, c, e, b, g, l, f)
}

function CCreditsPanel() {
    var a, c, e, b, g, l, f;
    this._init = function() {
        f = new createjs.Container;
        s_oStage.addChild(f);
        var m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(m);
        m = s_oSpriteLibrary.getSprite("msg_box_small");
        a = createBitmap(m);
        a.regX = m.width / 2;
        a.regY = m.height / 2;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        f.addChild(a);
        g = new createjs.Shape;
        g.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .01;
        g.on("click",
            this._onLogoButRelease);
        f.addChild(g);
        m = s_oSpriteLibrary.getSprite("but_no");
        e = new CGfxButton(980, 246, m, f);
        e.setScale(.6);
        e.addEventListener(ON_MOUSE_UP, this.unload, this);
        b = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px " + FONT_GAME, "#fff");
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.x = CANVAS_WIDTH / 2;
        b.y = 330;
        f.addChild(b);
        m = s_oSpriteLibrary.getSprite("logo_ctl");
        c = createBitmap(m);
        c.regX = m.width / 2;
        c.regY = m.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        f.addChild(c);
        l = new createjs.Text("www.codethislab.com",
            "26px " + FONT_GAME, "#fff");
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = CANVAS_WIDTH / 2;
        l.y = 450;
        f.addChild(l)
    };
    this.unload = function() {
        g.off("click", this._onLogoButRelease);
        e.unload();
        e = null;
        s_oStage.removeChild(f)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    };
    this._init()
}

function CAlertSavingBox(a, c) {
    var e, b, g;
    this._init = function(a) {
        g = new createjs.Container;
        f.addChild(g);
        var c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = .5;
        c.on("click", function() {});
        g.addChild(c);
        c = s_oSpriteLibrary.getSprite("msg_box_small");
        var d = createBitmap(c);
        d.x = .5 * CANVAS_WIDTH;
        d.y = .5 * CANVAS_HEIGHT;
        d.regX = .5 * c.width;
        d.regY = .5 * c.height;
        g.addChild(d);
        e = new createjs.Text(a, "28px " + FONT_GAME, "#fff");
        e.x = CANVAS_WIDTH / 2;
        e.y = 350;
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = c.width - 50;
        g.addChild(e);
        b = new CSideGfxButton(!1, 944, 250, s_oSpriteLibrary.getSprite("but_exit"), g);
        b.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        l.unload()
    };
    this.unload = function() {
        b.unload();
        f.removeChild(g)
    };
    var l = this;
    var f = c;
    this._init(a)
}

function CAreYouSurePanel() {
    var a, c, e, b, g, l, f, m, p = this;
    this._init = function() {
        a = [];
        c = [];
        f = new createjs.Container;
        f.visible = !1;
        s_oStage.addChild(f);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .5;
        m.on("click", function() {});
        f.addChild(m);
        var d = s_oSpriteLibrary.getSprite("msg_box_small");
        e = createBitmap(d);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        e.regX = .5 * d.width;
        e.regY = .5 * d.height;
        f.addChild(e);
        b = new createjs.Text(TEXT_ARE_SURE, "44px " + FONT_GAME, "#ffffff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 90;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = d.width - 100;
        f.addChild(b);
        g = new CGfxButton(CANVAS_WIDTH / 2 + 150, .5 * CANVAS_HEIGHT + 70, s_oSpriteLibrary.getSprite("but_yes"), f);
        g.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        l = new CGfxButton(CANVAS_WIDTH / 2 - 150, .5 * CANVAS_HEIGHT + 70, s_oSpriteLibrary.getSprite("but_no"), f);
        l.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.addEventListener = function(b, f, e) {
        a[b] = f;
        c[b] = e
    };
    this.show = function(a) {
        b.text =
            a;
        f.alpha = 0;
        f.visible = !0;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 300, createjs.Ease.quartOut).call(function() {
            s_oMain.stopUpdateNoBlock()
        })
    };
    this.hide = function() {
        s_oMain.startUpdateNoBlock();
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500, createjs.Ease.quartOut).call(function() {
            f.visible = !1
        })
    };
    this.unload = function() {
        l.unload();
        g.unload()
    };
    this._onButYes = function() {
        p.hide();
        a[ON_BUT_YES_DOWN] && a[ON_BUT_YES_DOWN].call(c[ON_BUT_YES_DOWN])
    };
    this._onButNo = function() {
        p.hide()
    };
    this._init()
}

function CGUIExpandible(a, c, e, b) {
    var g, l, f, m, p;
    this._init = function(a, b, d, e) {
        l = [];
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        e.addChild(m);
        p = new createjs.Container;
        m.addChild(p);
        g = !1;
        f = new CSideGfxButton(!1, 0, 0, d, p);
        f.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        f.tweenFinalX()
    };
    this.unload = function() {
        f.unload();
        b.removeChild(m)
    };
    this.refreshPos = function() {
        m.x = a - s_iOffsetX;
        m.y = c + s_iOffsetY;
        for (var b = 0; b < l.length; b++) l[b].setFinalX(m.x)
    };
    this.addButton = function(a) {
        l.push(a)
    };
    this._onMenu = function() {
        (g = !g) ? d._expand(): d._collapse()
    };
    this._expand = function() {
        for (var a = 0; a < l.length; a++) l[a].tweenFinalX()
    };
    this._collapse = function() {
        for (var a = 100 * l.length, b = 0; b < l.length; b++) l[b].tweenStartX(a), a -= 100
    };
    this.isExpanded = function() {
        return g
    };
    var d = this;
    this._init(a, c, e, b)
}

function CField(a, c, e) {
    var b, g, l, f, m, p, d, t, h, k, u, q = this;
    this._init = function(a, b) {
        d = [];
        t = [];
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        x.addChild(h);
        for (var f = [], e = 0; 87 > e; e++) {
            var c = s_oSpriteLibrary.getSprite("field_loop_" + e);
            f.push(c)
        }
        c = {
            images: f,
            framerate: 20,
            frames: {
                width: 1600,
                height: 631
            },
            animations: {
                start: 0,
                anim: [0, 29, "anim"],
                arrival: [30, 86, "end"],
                end: 86
            }
        };
        c = new createjs.SpriteSheet(c);
        u = createSprite(c, "start", 0, 0, 1600, 631);
        u.on("animationend", this._onAnimEnd, this);
        u.on("change", this._onAnimChange, this);
        h.addChild(u);
        f = [];
        for (e = 0; 42 > e; e++) c = s_oSpriteLibrary.getSprite("arrive_" + e), f.push(c);
        m = [];
        p = [];
        for (e = 0; 2 > e; e++) c = new CSponsor(510, 256, !0, h), m.push(c), c = new CSponsor(1070, 256, !1, h), p.push(c);
        c = {
            images: f,
            framerate: 15,
            frames: {
                width: 1600,
                height: 539
            },
            animations: {
                start: 0,
                anim: [0, 41, "end"],
                end: 42
            }
        };
        c = new createjs.SpriteSheet(c);
        k = createSprite(c, "start", 0, 0, 1600, 539);
        k.visible = !1;
        k.y = -b - 18;
        h.addChild(k)
    };
    this.reset = function() {
        for (var a = 0; a < m.length; a++) m[a].reset(), p[a].reset();
        g = !1;
        f = l = 0
    };
    this.show = function() {
        b = !1;
        u.gotoAndPlay("anim");
        g = !0
    };
    this.hide = function() {
        u.gotoAndStop("start");
        h.visible = !1
    };
    this.addEventListener = function(a, b, f) {
        d[a] = b;
        t[a] = f
    };
    this.readyForArrival = function() {
        b = !0
    };
    this._playArrival = function() {
        u.framerate = 15;
        u.gotoAndPlay("arrival")
    };
    this.stopAnim = function() {
        u.stop();
        this.stopSponsors()
    };
    this.prepareSponsorsForStop = function() {
        for (var a = 0; a < m.length; a++) m[a].readyForRemoval(), p[a].readyForRemoval()
    };
    this.stopSponsors = function() {
        for (var a = 0; a < m.length; a++) m[a].stopTween(), p[a].stopTween()
    };
    this._onAnimEnd = function(a) {
        "anim" === a.currentTarget.currentAnimation && b && (b = !1, q._playArrival())
    };
    this._onAnimChange = function(a) {
        "arrival" === a.currentTarget.currentAnimation && (75 === a.currentTarget.currentFrame ? d[ON_READY_FOR_PLAYER_ARRIVAL] && d[ON_READY_FOR_PLAYER_ARRIVAL].call(t[ON_READY_FOR_PLAYER_ARRIVAL]) : 31 === a.currentTarget.currentFrame && (k.gotoAndPlay("anim"), k.visible = !0))
    };
    this.update = function() {
        g && (l += s_iTimeElaps, 2E3 < l && (l = 0, m[f].startAnim(), p[f].startAnim(), f++, f === m.length && (g = !1)))
    };
    var x = e;
    this._init(a, c)
}

function CPlayer(a, c, e) {
    var b = !1,
        g = !1,
        l = !1,
        f, m, p, d, t, h, k, u, q, x, v, A, E, B, z;
    this._init = function(a, b) {
        d = a;
        t = b;
        u = 0;
        h = HERO_ACCELERATION;
        k = MAX_HERO_SPEED;
        E = [];
        B = [];
        z = new createjs.Container;
        z.x = a;
        z.y = b;
        C.addChild(z);
        A = [];
        A[PLAYER_ANIM_RUN] = 19;
        A[PLAYER_ANIM_FALL] = 30;
        A[PLAYER_ANIM_ARRIVAL] = 70;
        A[PLAYER_ANIM_LEFT] = 8;
        A[PLAYER_ANIM_RIGHT] = 8;
        A[PLAYER_ANIM_LEFT_OUT] = 7;
        A[PLAYER_ANIM_RIGHT_OUT] = 7;
        v = [];
        v[PLAYER_ANIM_RUN] = [];
        for (var e = 0; e < A[PLAYER_ANIM_RUN]; e++) {
            var c = s_oSpriteLibrary.getSprite("player_running_" + e),
                g = createBitmap(c);
            g.visible = !1;
            g.regX = c.width / 2;
            g.regY = c.height;
            z.addChild(g);
            v[PLAYER_ANIM_RUN].push(g)
        }
        v[PLAYER_ANIM_FALL] = [];
        for (e = 0; e < A[PLAYER_ANIM_FALL]; e++) c = s_oSpriteLibrary.getSprite("player_falling_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g), v[PLAYER_ANIM_FALL].push(g);
        v[PLAYER_ANIM_ARRIVAL] = [];
        for (e = 0; e < A[PLAYER_ANIM_ARRIVAL]; e++) c = s_oSpriteLibrary.getSprite("player_arrival_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g),
            v[PLAYER_ANIM_ARRIVAL].push(g);
        v[PLAYER_ANIM_LEFT] = [];
        for (e = 0; e < A[PLAYER_ANIM_LEFT]; e++) c = s_oSpriteLibrary.getSprite("player_left_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g), v[PLAYER_ANIM_LEFT].push(g);
        v[PLAYER_ANIM_RIGHT] = [];
        for (e = 0; e < A[PLAYER_ANIM_RIGHT]; e++) c = s_oSpriteLibrary.getSprite("player_right_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g), v[PLAYER_ANIM_RIGHT].push(g);
        v[PLAYER_ANIM_LEFT_OUT] = [];
        for (e = 0; e < A[PLAYER_ANIM_LEFT_OUT]; e++) c =
            s_oSpriteLibrary.getSprite("player_left_out_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g), v[PLAYER_ANIM_LEFT_OUT].push(g);
        v[PLAYER_ANIM_RIGHT_OUT] = [];
        for (e = 0; e < A[PLAYER_ANIM_RIGHT_OUT]; e++) c = s_oSpriteLibrary.getSprite("player_right_out_" + e), g = createBitmap(c), g.visible = !1, g.regX = c.width / 2, g.regY = c.height, z.addChild(g), v[PLAYER_ANIM_RIGHT_OUT].push(g);
        f = PLAYER_ANIM_RUN
    };
    this.addEventListener = function(a, b, d) {
        E[a] = b;
        B[a] = d
    };
    this.show = function() {
        m = A[f];
        v[f][0].visible = !0;
        p = 0;
        z.visible = !0;
        q = z.getBounds().width - 400;
        x = z.getBounds().height - 200;
        b = !0
    };
    this.hide = function() {
        b = !1;
        z.visible = !1
    };
    this.reset = function() {
        l = g = b = !1;
        u = 0;
        h = HERO_ACCELERATION;
        k = MAX_HERO_SPEED;
        z.alpha = 1;
        z.x = d;
        z.y = t;
        for (var a = 0; a < A[PLAYER_ANIM_RUN]; a++) v[PLAYER_ANIM_RUN][a].visible = !1;
        for (a = 0; a < A[PLAYER_ANIM_FALL]; a++) v[PLAYER_ANIM_FALL][a].visible = !1;
        for (a = 0; a < A[PLAYER_ANIM_ARRIVAL]; a++) v[PLAYER_ANIM_ARRIVAL][a].visible = !1;
        for (a = 0; a < A[PLAYER_ANIM_LEFT]; a++) v[PLAYER_ANIM_LEFT][a].visible = !1;
        for (a = 0; a <
            A[PLAYER_ANIM_RIGHT]; a++) v[PLAYER_ANIM_RIGHT][a].visible = !1;
        f = PLAYER_ANIM_RUN
    };
    this.changeAnim = function(a) {
        a !== f && (b = !1, v[f][p].visible = !1, f = a, v[f][0].visible = !0, p = 0, m = A[f], b = !0, a === PLAYER_ANIM_LEFT || a === PLAYER_ANIM_RIGHT ? playSound("skiing_direction", 1, !1) : a === PLAYER_ANIM_FALL ? playSound("falling", 1, !1) : a === PLAYER_ANIM_ARRIVAL && playSound("arrival", 1, !1))
    };
    this.playToFrame = function(a) {
        v[f][p].visible = !1;
        p = a;
        v[f][p].visible = !0
    };
    this.nextFrame = function() {
        v[f][p].visible = !1;
        p++;
        v[f][p].visible = !0
    };
    this.moveLeft =
        function(a) {
            z.x === MIN_PLAYER_X ? (g = !1, u = 0) : (a ? this.changeAnim(PLAYER_ANIM_LEFT) : this.changeAnim(PLAYER_ANIM_LEFT_OUT), g = a)
        };
    this.moveRight = function(a) {
        z.x === MAX_PLAYER_X ? (l = !1, u = 0) : (a ? this.changeAnim(PLAYER_ANIM_RIGHT) : this.changeAnim(PLAYER_ANIM_RIGHT_OUT), l = a)
    };
    this.setAcceleration = function(a, b) {
        h = a;
        k = b
    };
    this.setY = function(a) {
        z.y = a
    };
    this.getRect = function() {
        return new createjs.Rectangle(z.x - q / 2, z.y - x, q, x)
    };
    this.getCurAnim = function() {
        return f
    };
    this.getX = function() {
        return z.x
    };
    this.getContainer = function() {
        return z
    };
    this._updateMove = function() {
        f !== PLAYER_ANIM_FALL && f !== PLAYER_ANIM_ARRIVAL && (g && (u -= h), l && (u += h), z.x += u, u *= HERO_FRICTION, u > k && (u = k), u < -k && (u = -k), .1 > Math.abs(u) && (u = 0), z.x + u >= MAX_PLAYER_X ? (z.x = MAX_PLAYER_X, f === PLAYER_ANIM_RIGHT && this.changeAnim(PLAYER_ANIM_RIGHT_OUT)) : z.x - u <= MIN_PLAYER_X && (z.x = MIN_PLAYER_X, f === PLAYER_ANIM_LEFT && this.changeAnim(PLAYER_ANIM_LEFT_OUT)), z.y = t - Math.abs((z.x - CANVAS_WIDTH / 2) / 10), z.setTransform(z.x, z.y, 1, 1, 0, -(z.x - CANVAS_WIDTH / 2) / 50))
    };
    this.update = function() {
        if (!1 !== b)
            if (this._updateMove(),
                p === m - 1) switch (f) {
                case PLAYER_ANIM_RUN:
                    this.playToFrame(0);
                    break;
                case PLAYER_ANIM_FALL:
                    this.hide();
                    E[ON_PLAYER_FALL] && E[ON_PLAYER_FALL].call(B[ON_PLAYER_FALL]);
                    break;
                case PLAYER_ANIM_ARRIVAL:
                    b = !1;
                    E[ON_PLAYER_ARRIVAL] && E[ON_PLAYER_ARRIVAL].call(B[ON_PLAYER_ARRIVAL]);
                    break;
                case PLAYER_ANIM_LEFT_OUT:
                case PLAYER_ANIM_RIGHT_OUT:
                    this.changeAnim(PLAYER_ANIM_RUN)
            } else this.nextFrame()
    };
    var C = e;
    this._init(a, c)
}

function COpponent(a, c, e, b, g, l) {
    var f, m, p = !1,
        d, t, h, k, u, q, x = this,
        v;
    x = this;
    this._init = function(a, b, e) {
        h = [];
        k = [];
        f = a;
        m = b;
        v = new createjs.Container;
        v.x = a;
        v.y = b;
        v.scaleX = v.scaleY = .05;
        A.addChild(v);
        a = s_oSpriteLibrary.getSprite("item_" + e);
        d = a.width;
        t = a.height;
        q = createBitmap(a);
        v.addChild(q);
        v.regX = d / 2;
        v.regY = t;
        this.show()
    };
    this.addEventListener = function(a, b, d) {
        h[a] = b;
        k[a] = d
    };
    this.reset = function() {
        v.x = f;
        v.y = m;
        v.scaleX = v.scaleY = .05;
        q.visible = !1
    };
    this.unload = function() {
        A.removeChild(v)
    };
    this.show = function() {
        p = !1;
        this.reset();
        x._startRun()
    };
    this._startRun = function() {
        q.visible = !0;
        v.alpha = 0;
        v.visible = !0;
        (new createjs.Tween.get(v)).to({
            alpha: 1
        }, 1200);
        u = (new createjs.Tween.get(v)).to({
            x: b
        }, TIME_OPPONENT_RUN, createjs.Ease.quintIn);
        (new createjs.Tween.get(v)).to({
            y: OPPONENT_FINAL_Y
        }, TIME_OPPONENT_RUN, createjs.Ease.quintIn);
        (new createjs.Tween.get(v)).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, TIME_OPPONENT_RUN, createjs.Ease.quartIn).call(function() {
            x.hide()
        });
        p = !0
    };
    this.hide = function() {
        p = !1;
        v.visible = !1;
        h[ON_OPPONENT_HIDE] &&
            h[ON_OPPONENT_HIDE].call(k[ON_OPPONENT_HIDE], a)
    };
    this.stopUpdate = function() {
        createjs.Tween.removeTweens(v);
        p = !1
    };
    this.update = function() {
        if (p && u.position > .8 * TIME_OPPONENT_RUN && (p = !1, h[ON_OPPONENT_CHECK_COLLISION])) {
            var a = new createjs.Rectangle(v.x - d * v.scaleX / 2, v.y - t * v.scaleY, d * v.scaleX, t * v.scaleY);
            h[ON_OPPONENT_CHECK_COLLISION].call(k[ON_OPPONENT_CHECK_COLLISION], a, v)
        }
    };
    var A = l;
    this._init(c, e, g)
}

function CEndPanel() {
    var a, c, e, b, g, l, f, m, p, d, t, h, k = this;
    this._init = function() {
        e = [];
        b = [];
        t = new createjs.Container;
        t.visible = !1;
        s_oStage.addChild(t);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = 0;
        g = l.on("click", function() {});
        t.addChild(l);
        h = new createjs.Container;
        h.x = CANVAS_WIDTH / 2;
        t.addChild(h);
        var c = s_oSpriteLibrary.getSprite("msg_box_small"),
            k = createBitmap(c);
        h.addChild(k);
        f = new createjs.Text("", "70px " + FONT_GAME, "#fff");
        f.x = c.width / 2;
        f.y = c.height /
            2 - 100;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = c.width - 100;
        h.addChild(f);
        m = new createjs.Text("", "50px " + FONT_GAME, "#fff");
        m.x = c.width / 2;
        m.y = c.height / 2;
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.lineWidth = c.width - 100;
        h.addChild(m);
        p = new CGfxButton(c.width / 2 - 200, c.height / 2 + 110, s_oSpriteLibrary.getSprite("but_home"), h);
        p.addEventListener(ON_MOUSE_UP, this._onHome, this);
        d = new CGfxButton(c.width / 2 + 200, c.height / 2 + 110, s_oSpriteLibrary.getSprite("but_restart"), h);
        d.addEventListener(ON_MOUSE_UP,
            this._onRestart, this);
        a = -c.height / 2;
        h.regX = c.width / 2;
        h.regY = c.height / 2
    };
    this.unload = function() {
        p.unload();
        d.unload();
        l.off("click", g)
    };
    this.addEventListener = function(a, d, c) {
        e[a] = d;
        b[a] = c
    };
    this.show = function(b, d) {
        setVolume("soundtrack", 0);
        (d === TEXT_CONGRATS ? playSound("level_win", 1, !1) : playSound("game_over", 1, !1)).on("end", function() {
            setVolume("soundtrack", 1)
        });
        f.text = d;
        m.text = TEXT_SCORE + ": " + b;
        l.alpha = 0;
        h.y = a;
        t.visible = !0;
        createjs.Tween.get(l).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(h).wait(400).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.quartOut).call(function() {
            k.enableButtons()
        })
    };
    this.hide = function() {
        createjs.Tween.get(h).to({
            y: a
        }, 500, createjs.Ease.quartOut).call(function() {
            t.visible = !1;
            e[c] && e[c].call(b[c])
        })
    };
    this.enableButtons = function() {
        p.enable();
        d.enable()
    };
    this.disableButtons = function() {
        p.disable();
        d.disable()
    };
    this._onHome = function() {
        k.disableButtons();
        c = ON_BACK_MENU;
        k.hide()
    };
    this._onRestart = function() {
        k.disableButtons();
        $(s_oMain).trigger("show_interlevel_ad");
        c = ON_RESTART;
        k.hide()
    };
    this._init()
}

function CNextLevelPanel() {
    var a, c, e, b, g, l, f, m, p, d, t, h, k, u, q = this;
    this._init = function() {
        e = [];
        b = [];
        k = new createjs.Container;
        k.visible = !1;
        s_oStage.addChild(k);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = 0;
        g = l.on("click", function() {});
        k.addChild(l);
        u = new createjs.Container;
        u.x = CANVAS_WIDTH / 2;
        k.addChild(u);
        var c = s_oSpriteLibrary.getSprite("msg_box_small"),
            q = createBitmap(c);
        u.addChild(q);
        m = new createjs.Text("", "50px " + FONT_GAME, "#fff");
        m.x = c.width /
            2;
        m.y = c.height / 2 - 120;
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.lineWidth = c.width - 100;
        u.addChild(m);
        f = new createjs.Text("", "40px " + FONT_GAME, "#fff");
        f.x = c.width / 2;
        f.y = c.height / 2 - 30;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = c.width - 100;
        u.addChild(f);
        p = new createjs.Text("", "40px " + FONT_GAME, "#fff");
        p.x = c.width / 2;
        p.y = c.height / 2 + 20;
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = c.width - 100;
        u.addChild(p);
        d = new CGfxButton(c.width / 2 - 200, c.height / 2 + 110, s_oSpriteLibrary.getSprite("but_home"),
            u);
        d.addEventListener(ON_MOUSE_UP, this._onHome, this);
        t = new CGfxButton(c.width / 2, c.height / 2 + 110, s_oSpriteLibrary.getSprite("but_restart"), u);
        t.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        h = new CGfxButton(c.width / 2 + 200, c.height / 2 + 110, s_oSpriteLibrary.getSprite("but_next"), u);
        h.addEventListener(ON_MOUSE_UP, this._onNext, this);
        a = -c.height / 2;
        u.regX = c.width / 2;
        u.regY = c.height / 2
    };
    this.unload = function() {
        d.unload();
        t.unload();
        l.off("click", g)
    };
    this.addEventListener = function(a, d, c) {
        e[a] = d;
        b[a] = c
    };
    this.show =
        function(b, d, c) {
            setVolume("soundtrack", 0);
            playSound("level_win", 1, !1).on("end", function() {
                setVolume("soundtrack", 1)
            });
            m.text = TEXT_LEVEL + " " + c + " " + TEXT_CLEARED;
            f.text = TEXT_LEVEL_SCORE + ": " + b;
            p.text = TEXT_SCORE + ": " + d;
            l.alpha = 0;
            u.y = a;
            k.visible = !0;
            createjs.Tween.get(l).to({
                alpha: .7
            }, 500);
            createjs.Tween.get(u).wait(400).to({
                y: CANVAS_HEIGHT / 2
            }, 500, createjs.Ease.quartOut).call(function() {
                q.enableButtons()
            })
        };
    this.hide = function() {
        createjs.Tween.get(u).to({
            y: a
        }, 500, createjs.Ease.quartOut).call(function() {
            k.visible = !1;
            e[c] && e[c].call(b[c])
        })
    };
    this.enableButtons = function() {
        d.enable();
        h.enable();
        t.enable()
    };
    this.disableButtons = function() {
        d.disable();
        h.disable();
        t.disable()
    };
    this._onHome = function() {
        q.disableButtons();
        c = ON_BACK_MENU;
        q.hide()
    };
    this._onRestart = function() {
        q.disableButtons();
        $(s_oMain).trigger("show_interlevel_ad");
        c = ON_RESTART;
        q.hide()
    };
    this._onNext = function() {
        q.disableButtons();
        $(s_oMain).trigger("show_interlevel_ad");
        c = ON_NEXT_LEVEL;
        q.hide()
    };
    this._init()
}
var MS_ROLLING_SCORE = 400;

function CRollingScore() {
    var a = null,
        c = null;
    this.rolling = function(e, b, g) {
        a = createjs.Tween.get(e).to({
            text: g
        }, MS_ROLLING_SCORE, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.removeTweens(a);
            e.color = "#fff"
        }).addEventListener("change", function() {
            e.text = Math.floor(e.text)
        });
        null !== b && (c = createjs.Tween.get(b).to({
            text: g
        }, MS_ROLLING_SCORE, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.removeTweens(c)
        }).addEventListener("change", function() {
            b.text = Math.floor(b.text)
        }))
    };
    return this
}

function CScoreText(a, c, e, b) {
    var g;
    this._init = function(a, c, e) {
        g = new createjs.Text("+" + a, " 80px " + FONT_GAME, "#fff");
        g.textAlign = "center";
        g.x = c;
        g.y = e;
        g.alpha = 0;
        g.shadow = new createjs.Shadow("#000", 1, 1, 1);
        b.addChild(g);
        var f = this;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 200, createjs.Ease.quadIn).call(function() {
            f.moveUp()
        })
    };
    this.moveUp = function() {
        var a = g.y - 400,
            b = this;
        createjs.Tween.get(g).to({
            y: a
        }, 1500, createjs.Ease.sineIn).call(function() {
            b.unload()
        });
        createjs.Tween.get(g).wait(800).to({
            alpha: 0
        }, 500)
    };
    this.unload =
        function() {
            b.removeChild(g)
        };
    this._init(a, c, e)
}

function CCountdownController(a, c, e) {
    var b, g, l, f, m, p = this;
    this._init = function(a, b) {
        l = [];
        f = [];
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        e.addChild(m);
        g = [];
        for (var d = 0; 4 > d; d++) {
            var c = s_oSpriteLibrary.getSprite("countdown_" + (4 - d - 1)),
                p = createBitmap(c);
            p.regX = c.width / 2;
            p.regY = c.height / 2;
            m.addChild(p);
            g.push(p)
        }
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        f[a] = c
    };
    this.reset = function() {
        for (var a = 0; a < g.length; a++) g[a].scaleX = g[a].scaleY = .1, g[a].alpha = 0
    };
    this.start = function() {
        b = 0;
        this._playAnim()
    };
    this._playAnim =
        function() {
            0 < b && createjs.Tween.get(g[b - 1]).to({
                alpha: 0
            }, 300, createjs.Ease.cubicOut);
            b === g.length ? l[ON_END_COUNTDOWN] && l[ON_END_COUNTDOWN].call(f[ON_END_COUNTDOWN]) : (createjs.Tween.get(g[b]).to({
                alpha: 1
            }, 300, createjs.Ease.cubicOut).call(function() {
                b === g.length - 1 ? playSound("go", 1, !1) : playSound("countdown", 1, !1)
            }), createjs.Tween.get(g[b]).to({
                scaleX: 1,
                scaleY: 1
            }, 1E3, createjs.Ease.quartOut).call(function() {
                b++;
                p._playAnim()
            }))
        };
    this._init(a, c)
}

function CSponsor(a, c, e, b) {
    var g, l, f, m, p, d, t = this;
    this._init = function(a, c) {
        g = !1;
        l = a;
        f = c;
        d = new createjs.Container;
        d.visible = !1;
        d.x = a;
        d.y = c;
        d.scaleX = d.scaleY = .1;
        b.addChild(d);
        var h = s_oSpriteLibrary.getSprite("sponsor"),
            k = createBitmap(h);
        k.regX = h.width / 2;
        k.regY = h.height / 2;
        d.addChild(k);
        e ? (k.rotation = 5, m = -h.width / 2) : (k.rotation = -5, m = CANVAS_WIDTH + h.width / 2);
        p = c - 40
    };
    this.reset = function() {
        d.visible = !1;
        this._resetAnim()
    };
    this.startAnim = function() {
        d.visible = !0;
        d.alpha = 0;
        (new createjs.Tween.get(d)).to({
                alpha: 1
            },
            1E3);
        (new createjs.Tween.get(d)).to({
            x: m,
            y: p
        }, TIME_OPPONENT_RUN, createjs.Ease.quintIn).call(function() {
            g ? d.visible = !1 : (t._resetAnim(), t.startAnim())
        });
        (new createjs.Tween.get(d)).to({
            scaleX: 1,
            scaleY: 1
        }, TIME_OPPONENT_RUN, createjs.Ease.quartIn)
    };
    this._resetAnim = function() {
        g = !1;
        d.x = l;
        d.y = f;
        d.scaleX = d.scaleY = .1
    };
    this.readyForRemoval = function() {
        g = !0
    };
    this.stopTween = function() {
        createjs.Tween.removeTweens(d)
    };
    this._init(a, c)
};