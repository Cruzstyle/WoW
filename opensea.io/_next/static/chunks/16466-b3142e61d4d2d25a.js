"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16466], {
        34804: function(e, n, t) {
            t.d(n, {
                T: function() {
                    return Pe
                }
            });
            var a = t(23842),
                i = t(85034),
                r = t(70169),
                l = t(52050),
                o = t(19989),
                s = t(35230),
                c = t.n(s),
                u = t(24246),
                d = t(27378),
                m = t(71636),
                y = t.n(m),
                p = t(4402),
                f = t(47892),
                g = t(74016),
                h = t(53585),
                x = t(16611),
                k = t(9476),
                v = t(28828),
                b = t(88747),
                j = (t(59809), t(63964)),
                H = t(98784),
                T = t(48257),
                S = t(87667),
                P = t(77795),
                F = t(56656),
                w = t(97004),
                K = t(96150),
                A = t(81399),
                C = t(72363),
                q = t(2385),
                Z = t(39550),
                _ = t(76190),
                D = t(6723);

            function E() {
                var e = (0, o.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
                return E = function() {
                    return e
                }, e
            }

            function z() {
                var e = (0, o.Z)(["\n  background: ", ";\n  border-top: 1px solid ", ";\n  bottom: 0;\n  margin-top: auto;\n  padding: 16px;\n  position: sticky;\n  width: 100%;\n  z-index: 1;\n"]);
                return z = function() {
                    return e
                }, e
            }
            var V = ["7", "14", "30", "60", "90", "365", "All time"],
                L = function(e) {
                    var n = e.dayDurationFilter,
                        t = e.style,
                        a = e.onChange,
                        i = e.className,
                        r = (0, D.q)("components"),
                        l = (0, d.useState)(!1),
                        o = l[0],
                        s = l[1],
                        c = (0, Z.FN)().visibleAnnouncementBannerHeight,
                        m = function(e, n) {
                            return {
                                label: "All time" === e ? r("assets.priceHistory.allTime.label", "All time") : "365" === e ? r("assets.priceHistory.lastYear.label", "Last year") : n ? r("assets.priceHistory.lastDays.mobileLabel", "{{quantity}} days", {
                                    quantity: e
                                }, {
                                    forceString: !0
                                }) : r("assets.priceHistory.lastDays.label", "Last {{quantity}} days", {
                                    quantity: e
                                }, {
                                    forceString: !0
                                }),
                                value: "".concat(e)
                            }
                        },
                        y = V.map((function(e) {
                            return m(e, !1)
                        })),
                        p = (0, u.jsx)(q.P, {
                            className: i,
                            clearable: !1,
                            options: y,
                            readOnly: !0,
                            style: t,
                            value: n,
                            onSelect: function(e) {
                                return (null === e || void 0 === e ? void 0 : e.value) && a(e.value)
                            }
                        });
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(C.pU, {
                            greaterThanOrEqual: "lg",
                            children: p
                        }), (0, u.jsx)(C.pU, {
                            lessThan: "lg",
                            children: function(e, t) {
                                return t ? (0, u.jsxs)(h.g, {
                                    className: e,
                                    width: "100%",
                                    children: [(0, u.jsx)(_.t, {
                                        startEnhancer: (0, u.jsx)(T.J, {
                                            marginRight: "8px",
                                            size: 24,
                                            value: "history"
                                        }),
                                        width: "100%",
                                        onClick: function() {
                                            s(!0)
                                        },
                                        children: m(n, !0).label
                                    }), (0, u.jsxs)(R, {
                                        anchorSide: "bottom",
                                        bannerHeight: c,
                                        "data-testid": "phoenix-price-history-dropdown-drawer",
                                        isOpen: o,
                                        zIndex: P.k.NAVBAR,
                                        onClickAway: H.noop,
                                        children: [(0, u.jsxs)(K.k, {
                                            flexDirection: "column",
                                            padding: "16px",
                                            children: [(0, u.jsxs)(K.k, {
                                                alignItems: "center",
                                                as: "header",
                                                height: "".concat(v.Wb, "px"),
                                                justifyContent: "center",
                                                marginBottom: "16px",
                                                position: "relative",
                                                children: [(0, u.jsx)(x.WX, {
                                                    as: "span",
                                                    variant: "h4",
                                                    children: r("assets.priceHistory.timeFrame.title", "Time frame")
                                                }), (0, u.jsx)(K.k, {
                                                    position: "absolute",
                                                    right: "0",
                                                    children: (0, u.jsx)(A.h, {
                                                        onClick: function() {
                                                            return s(!1)
                                                        },
                                                        children: (0, u.jsx)(T.J, {
                                                            size: 24,
                                                            value: "close"
                                                        })
                                                    })
                                                })]
                                            }), y.map((function(e) {
                                                var t = e.label,
                                                    i = e.value;
                                                return (0, u.jsx)(S.V, {
                                                    inputProps: {
                                                        value: i
                                                    },
                                                    isSelected: i === n,
                                                    label: t,
                                                    name: "price-history-dropdown",
                                                    type: "radio",
                                                    onChange: function() {
                                                        a(i)
                                                    }
                                                }, i)
                                            }))]
                                        }), (0, u.jsx)(N, {
                                            children: (0, u.jsx)(F.zx, {
                                                justifyContent: "center",
                                                width: "100%",
                                                onClick: function() {
                                                    return s(!1)
                                                },
                                                children: r("assets.priceHistory.doneCTA", "Done")
                                            })
                                        })]
                                    })]
                                }) : null
                            }
                        })]
                    })
                },
                R = (0, f.ZP)(w.dy).withConfig({
                    componentId: "sc-f25652b-0"
                })(E()),
                N = (0, f.ZP)(K.k).withConfig({
                    componentId: "sc-f25652b-1"
                })(z(), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.border
                })),
                I = t(3204),
                M = t(56583),
                W = t(27476),
                O = t(96008),
                $ = t(38616),
                B = t(90782),
                Q = t(32529),
                G = t(26299),
                Y = t(76575),
                U = t(54446),
                X = t(20225),
                J = t(97516),
                ee = t(11652),
                ne = t(90761),
                te = t(70884),
                ae = t(87821),
                ie = t(17813);

            function re() {
                var e = (0, o.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  text-align: center;\n  padding: 8px;\n  min-width: 160px;\n"]);
                return re = function() {
                    return e
                }, e
            }

            function le() {
                var e = (0, o.Z)(["\n  margin: 0;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  justify-content: center;\n  user-select: none;\n\n  &.PriceHistory--empty {\n    height: initial;\n    margin-bottom: 16px;\n  }\n\n  .PriceHistory--no-data-img {\n    ", "\n  }\n\n  .PriceHistory--no-data-text {\n    font-size: 16px;\n    margin-top: 4px;\n  }\n\n  .PriceHistory--chart {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    margin: 12px 0 8px;\n\n    .recharts-cartesian-grid-horizontal line:last-child {\n      display: none;\n    }\n  }\n"]);
                return le = function() {
                    return e
                }, e
            }
            var oe = [.1, .2, .5, 1, 2, 5, 10],
                se = 86400,
                ce = function(e) {
                    return y().unix(e + se).format("MMM D, YYYY")
                },
                ue = (0, M.Z)((function(e) {
                    return e.results.map((function(e) {
                        var n = e.bucketStart,
                            t = e.bucketEnd,
                            a = e.quantity,
                            i = e.volume,
                            r = i.asset;
                        return {
                            time: (0, J.pY)(n).startOf("day").unix(),
                            timeEnd: (0, J.pY)(t).startOf("day").unix(),
                            price: (0, ee.bn)(i.quantity, i.asset.decimals).div((0, ee.bn)(a, 0)),
                            volume: (0, ee.bn)(i.quantity, r.decimals || ee.oI),
                            quantity: (0, ee.bn)(a)
                        }
                    })).filter(Boolean)
                })),
                de = (0, M.Z)((function(e, n) {
                    var t, a;
                    if (n < 2) throw new Error("Tick count must be at least 2");
                    var i = e.map((function(e) {
                        return e.time
                    }));
                    if (0 === i.length) return [];
                    if (1 === i.length) return [i[0]];
                    var r = y().unix((t = Math).min.apply(t, (0, I.Z)(i))),
                        l = y().unix((a = Math).max.apply(a, (0, I.Z)(i))),
                        o = l.diff(r, "day"),
                        s = Math.min(n, o + 1),
                        c = Math.ceil(o / (s - 1));
                    return Array(s).fill(void 0).map((function(e, n) {
                        return l.clone().subtract((s - n - 1) * c, "day").unix()
                    })).filter((function(e) {
                        return e >= r.unix()
                    }))
                })),
                me = (0, M.Z)((function(e, n) {
                    var t, a;
                    if (n < 2) throw new Error("Tick count must be at least 2");
                    if (0 === e.length) return [];
                    var i = (t = ee.O$).min.apply(t, (0, I.Z)(e)),
                        r = (a = ee.O$).max.apply(a, (0, I.Z)(e)),
                        l = i.isEqualTo(r) ? (0, ee.bn)(0) : i,
                        o = i.isEqualTo(r) ? r.times(2) : r,
                        s = o.minus(l),
                        c = (0, ee.bn)(10).exponentiatedBy(Math.floor(Math.log10(+s > 0 ? +s : 1))),
                        u = oe.map((function(e) {
                            return {
                                interval: e,
                                min: +l.div(c).div(e).integerValue(ee.O$.ROUND_FLOOR),
                                max: +o.div(c).div(e).integerValue(ee.O$.ROUND_CEIL)
                            }
                        })),
                        d = u.find((function(e) {
                            var t = e.min,
                                a = e.max;
                            return n - 1 >= a - t
                        })) || u[u.length - 1],
                        m = d.interval,
                        y = d.min,
                        p = d.max,
                        f = Math.min(n, Math.ceil(p - y) + 1);
                    return Array(f).fill(void 0).map((function(e, n) {
                        return +c.times(m.toString()).times((y + n).toString())
                    }))
                })),
                ye = function(e) {
                    var n, a = e.data,
                        i = e.xMaxTickCount,
                        r = e.yMaxTickCount,
                        l = e.height,
                        o = (0, D.q)("components"),
                        s = (0, X.Fg)().theme,
                        c = (0, d.useRef)(null),
                        m = (0, p.useFragment)(t(75856), a),
                        f = ue(m);
                    if (0 === f.length) return (0, u.jsxs)(ge, {
                        className: "PriceHistory--empty",
                        children: [(0, u.jsx)(ie.Z, {
                            alt: "",
                            className: "PriceHistory--no-data-img",
                            height: 100,
                            url: te.fU
                        }), (0, u.jsx)("div", {
                            className: "PriceHistory--no-data-text",
                            children: o("assets.priceHistory.emptyState.description", "No item activity yet")
                        })]
                    });
                    var g, h = de(f, i),
                        x = me(f.map((function(e) {
                            return e.price
                        })), r),
                        k = null !== (g = null === (n = m.results[0]) || void 0 === n ? void 0 : n.volume.asset.symbol) && void 0 !== g ? g : void 0,
                        v = ae.ZP[s].colors,
                        b = v.border,
                        j = v.text.body;
                    return (0, u.jsx)(ge, {
                        "aria-description": o("assets.priceHistory.chart.description", "Line graph displaying the average price, volume, and number of sales of the item per day over a period of time."),
                        "aria-label": o("assets.priceHistory.chart.label", "Price history graph"),
                        "data-testid": "price-history-graph",
                        ref: c,
                        style: {
                            height: l + "px"
                        },
                        children: (0, u.jsx)(W.h, {
                            className: "PriceHistory--chart",
                            height: l,
                            width: "100%",
                            children: (0, u.jsxs)(O.c, {
                                data: f.map((function(e) {
                                    return {
                                        time: e.time,
                                        timeEnd: e.timeEnd,
                                        price: +e.price,
                                        volume: +e.volume,
                                        quantity: +e.quantity
                                    }
                                })),
                                margin: {
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    top: 5
                                },
                                children: [(0, u.jsx)($.q, {
                                    stroke: b,
                                    vertical: !1
                                }), (0, u.jsx)(B.u, {
                                    content: pe
                                }), (0, u.jsx)(Q.K, {
                                    dataKey: "time",
                                    domain: [f[0].time, f[f.length - 1].time],
                                    interval: 0,
                                    stroke: b,
                                    tick: {
                                        fill: j,
                                        fillOpacity: .6
                                    },
                                    tickFormatter: function(e) {
                                        return y().unix(e + se).format("M/D")
                                    },
                                    tickMargin: 6,
                                    tickSize: 10,
                                    ticks: h,
                                    type: "number"
                                }), (0, u.jsx)(G.B, {
                                    dataKey: "price",
                                    domain: [x[0], x[x.length - 1]],
                                    interval: 0,
                                    padding: {
                                        bottom: 0,
                                        top: 10
                                    },
                                    stroke: b,
                                    tick: {
                                        fill: j,
                                        fillOpacity: .6
                                    },
                                    tickMargin: 18,
                                    tickSize: 10,
                                    ticks: x,
                                    type: "number",
                                    width: 53,
                                    yAxisId: "left"
                                }), (0, u.jsx)(G.B, {
                                    allowDecimals: !1,
                                    axisLine: !1,
                                    dataKey: "volume",
                                    interval: 0,
                                    orientation: "right",
                                    padding: {
                                        bottom: 0,
                                        top: 40
                                    },
                                    tick: !1,
                                    tickCount: 3,
                                    tickSize: 10,
                                    type: "number",
                                    width: 15,
                                    yAxisId: "right"
                                }), (0, u.jsx)(Y.$, {
                                    barSize: 5,
                                    dataKey: "volume",
                                    fill: "#bfdcf6",
                                    unit: k,
                                    yAxisId: "right"
                                }), (0, u.jsx)(U.x, {
                                    activeDot: {
                                        fill: ae.o7.primary,
                                        stroke: ae.o7.primary,
                                        strokeOpacity: .3,
                                        strokeWidth: 5
                                    },
                                    dataKey: "price",
                                    dot: !1,
                                    isAnimationActive: !1,
                                    stroke: ae.o7.primary,
                                    strokeWidth: 3,
                                    type: "monotone",
                                    unit: k,
                                    yAxisId: "left"
                                })]
                            })
                        })
                    })
                },
                pe = function(e) {
                    var n = e.active,
                        t = e.payload,
                        a = (0, D.q)("components");
                    if (!n || !t || !t.length) return null;
                    var i = t[0],
                        r = i.unit,
                        l = i.payload,
                        o = l.time,
                        s = l.timeEnd,
                        c = l.price,
                        d = l.volume,
                        m = l.quantity;
                    return (0, u.jsxs)(fe, {
                        children: [(0, u.jsx)(x.WX, {
                            color: "white",
                            margin: "0",
                            variant: "small",
                            children: s - o <= se ? ce(o) : a("assets.priceHistory.weekOfDate", "Week of {{date}}", {
                                date: ce(o)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.avgPrice.label", "Avg. price: \u039e{{amount}}", {
                                amount: (0, ee.jf)(c, r)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.volume.label", "Volume: \u039e{{amount}}", {
                                amount: (0, ee.SG)(d)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.numSales.label", "Num. sales: {{quantity}}", {
                                quantity: (0, ee.jf)(m)
                            })
                        })]
                    })
                },
                fe = (0, f.ZP)(h.g).withConfig({
                    componentId: "sc-5460715e-0"
                })(re(), (function(e) {
                    return e.theme.colors.charcoal
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                ge = f.ZP.figure.withConfig({
                    componentId: "sc-5460715e-1"
                })(le(), (0, ne.Um)({
                    variants: {
                        dark: {
                            opacity: .5
                        }
                    }
                }), (function(e) {
                    return e.theme.colors.withOpacity.oil.light
                })),
                he = t(60034),
                xe = t(39738),
                ke = function(e) {
                    var n = e.data,
                        a = e.dayDurationFilter,
                        i = e.hideAllTimeVolume,
                        r = (0, D.q)("components"),
                        l = (0, p.useFragment)(t(82623), n),
                        o = (0, xe.VS)(l.results, (function(e) {
                            var n = e.volume;
                            return n.quantity ? [(0, ee.bn)(n.quantity, n.asset.decimals)] : []
                        })),
                        s = l.results.map((function(e) {
                            var n = e.quantity;
                            return (0, ee.bn)(n, 0)
                        }));
                    if (!s.length) return null;
                    var c = s.reduce((function(e, n) {
                            return e.plus(n)
                        })),
                        d = o.reduce((function(e, n) {
                            return e.plus(n)
                        })),
                        m = d.div(c);
                    return (0, u.jsx)(h.g, {
                        margin: "4px 0",
                        children: (0, u.jsxs)(K.k, {
                            marginRight: "10px",
                            children: [(0, u.jsxs)(K.k, {
                                flexDirection: "column",
                                padding: {
                                    _: "4px 10px 4px 0",
                                    sm: "4px 10px"
                                },
                                children: ["All time" === a ? r("assets.priceHistory.averagePrice.allTime.label", "All time avg. price") : "365" === a ? r("assets.priceHistory.averagePrice.yearLong.label", "Yearlong avg. price") : r("assets.priceHistory.averagePrice.days.label", "{{days}} day avg. price", {
                                    days: a
                                }), (0, u.jsx)(K.k, {
                                    alignItems: "center",
                                    children: (0, u.jsxs)(x.WX, {
                                        margin: 0,
                                        variant: "faux-link",
                                        children: ["\u039e", (0, ee.jf)(m, "ETH")]
                                    })
                                })]
                            }), i && "All time" === a ? null : (0, u.jsxs)(K.k, {
                                flexDirection: "column",
                                padding: "4px 10px",
                                children: ["All time" === a ? r("assets.priceHistory.volume.allTime.label", "All time volume") : "365" === a ? r("assets.priceHistory.volume.yearLong.label", "Yearlong volume") : r("assets.priceHistory.volume.days.label", "{{days}} day volume", {
                                    days: a
                                }), (0, u.jsx)(h.g, {
                                    children: (0, u.jsx)(K.k, {
                                        alignItems: "center",
                                        children: (0, u.jsxs)(x.WX, {
                                            margin: 0,
                                            variant: "faux-link",
                                            children: ["\u039e", (0, ee.jf)(d, "ETH")]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                };

            function ve() {
                var e = (0, o.Z)(["\n  height: ", "px;\n  padding-left: 24px;\n  padding-right: 20px;\n"]);
                return ve = function() {
                    return e
                }, e
            }

            function be() {
                var e = (0, o.Z)(["\n  .PriceHistory--interface {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .PriceHistory--loader {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    padding-top: 16px;\n    width: 100%;\n  }\n"]);
                return be = function() {
                    return e
                }, e
            }
            var je = 200,
                He = function(e) {
                    var n = e.children,
                        i = e.data,
                        r = e.hideAllTimeVolume,
                        o = e.xMaxTickCount,
                        s = e.yMaxTickCount,
                        m = e.height,
                        f = void 0 === m ? je : m,
                        g = e.priceHistoryGraphKey,
                        j = e.initialDayDurationFilter,
                        H = e.variables,
                        T = H.archetype,
                        S = H.collection,
                        P = H.bucketSize,
                        F = (0, l.Z)((0, p.useRefetchableFragment)(t(15942), i), 2),
                        w = F[0],
                        K = F[1],
                        A = (0, d.useState)(null !== j && void 0 !== j ? j : "All time"),
                        C = A[0],
                        q = A[1],
                        Z = (0, d.useState)(!1),
                        _ = Z[0],
                        D = Z[1],
                        E = (0, b.Hp)();
                    return n && "function" === typeof n ? n({
                        Dropdown: function() {
                            return (0, u.jsx)(x.WX, {
                                as: "span",
                                variant: "bold",
                                width: "100%",
                                children: (0, u.jsx)(Fe, {
                                    dayDurationFilter: C,
                                    style: {
                                        height: v.Wb
                                    },
                                    onChange: function() {
                                        var e = (0, a.Z)(c().mark((function e(n) {
                                            var t, a;
                                            return c().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return D(!0), q(n), t = "All time" !== n ? y()().subtract(n, "days").format() : void 0, a = null !== P && void 0 !== P ? P : "All time" === n || +n > 90 ? "WEEK" : "DAY", e.next = 6, K({
                                                            archetype: T,
                                                            bucketSize: a,
                                                            collection: S,
                                                            cutoff: t
                                                        });
                                                    case 6:
                                                        D(!1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                })
                            })
                        },
                        PriceActivity: function(e) {
                            var n = e.xMaxTickCount,
                                t = void 0 === n ? 12 : n;
                            return (0, u.jsxs)(we, {
                                children: [(0, u.jsx)("div", {
                                    className: "PriceHistory--interface",
                                    children: !_ && (null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)(ke, {
                                        data: w.tradeHistory,
                                        dayDurationFilter: C,
                                        hideAllTimeVolume: r
                                    }) : null
                                }), _ || !(null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)("div", {
                                    className: "PriceHistory--loader",
                                    children: (0, u.jsx)(k.aN, {
                                        size: "large"
                                    })
                                }) : E ? (0, u.jsx)(h.g, {
                                    paddingY: "16px",
                                    children: (0, u.jsx)(he.c, {
                                        data: w.tradeHistory,
                                        height: f || je,
                                        useUTC: !!S
                                    }, g)
                                }) : (0, u.jsx)("div", {
                                    className: "PriceHistory--graph",
                                    children: (0, u.jsx)(ye, {
                                        data: w.tradeHistory,
                                        height: f || je,
                                        xMaxTickCount: t,
                                        yMaxTickCount: s
                                    }, g)
                                })]
                            })
                        }
                    }) : (0, u.jsxs)(we, {
                        children: [(0, u.jsxs)("div", {
                            className: "PriceHistory--interface",
                            children: [(0, u.jsx)(h.g, {
                                marginY: "8px",
                                children: (0, u.jsx)(L, {
                                    dayDurationFilter: C,
                                    onChange: function() {
                                        var e = (0, a.Z)(c().mark((function e(n) {
                                            var t, a;
                                            return c().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return D(!0), q(n), t = "All time" !== n ? y()().subtract(n, "days").format() : void 0, a = null !== P && void 0 !== P ? P : "All time" === n || +n > 90 ? "WEEK" : "DAY", e.next = 6, K({
                                                            archetype: T,
                                                            bucketSize: a,
                                                            collection: S,
                                                            cutoff: t
                                                        });
                                                    case 6:
                                                        D(!1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                })
                            }), !_ && (null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)(ke, {
                                data: w.tradeHistory,
                                dayDurationFilter: C,
                                hideAllTimeVolume: r
                            }) : null]
                        }), _ || !(null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)("div", {
                            className: "PriceHistory--loader",
                            children: (0, u.jsx)(k.aN, {
                                size: "large"
                            })
                        }) : E ? (0, u.jsx)(h.g, {
                            paddingY: "16px",
                            children: (0, u.jsx)(he.c, {
                                data: w.tradeHistory,
                                height: f || je,
                                useUTC: !!S
                            }, g)
                        }) : (0, u.jsx)("div", {
                            className: "PriceHistory--graph",
                            children: (0, u.jsx)(ye, {
                                data: w.tradeHistory,
                                height: f || je,
                                xMaxTickCount: o,
                                yMaxTickCount: s
                            }, g)
                        })]
                    })
                },
                Te = t(39877),
                Se = (0, j.d)(He, Te),
                Pe = function(e) {
                    return (0, u.jsx)(g.s, {
                        fallback: (0, u.jsx)(He, (0, r.Z)((0, i.Z)({}, e), {
                            data: null
                        })),
                        hasSsrData: !0,
                        children: (0, u.jsx)(Se, (0, i.Z)({}, e))
                    })
                },
                Fe = (0, f.ZP)(L).withConfig({
                    componentId: "sc-f1a45f0e-0"
                })(ve(), v.Wb),
                we = f.ZP.div.withConfig({
                    componentId: "sc-f1a45f0e-1"
                })(be())
        },
        14678: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return c
                }
            });
            var a = t(85034),
                i = t(70169),
                r = t(31373),
                l = t(24246),
                o = (t(27378), t(53585)),
                s = t(316),
                c = function(e) {
                    var n = e.size,
                        t = void 0 === n ? 14 : n,
                        c = e.variant,
                        u = void 0 === c ? "default" : c,
                        d = e.compact,
                        m = void 0 === d || d,
                        y = (0, r.Z)(e, ["size", "variant", "compact"]);
                    return (0, l.jsxs)(o.g, (0, i.Z)((0, a.Z)({
                        alignItems: "center",
                        display: "inline-flex",
                        height: t,
                        justifyContent: "center",
                        width: t
                    }, y), {
                        position: "relative",
                        children: [(0, l.jsx)(s.xv.Body, {
                            position: "absolute",
                            size: m ? "tiny" : "small",
                            style: {
                                transform: "default" === u ? void 0 : "translate(0, -".concat(t, "px)"),
                                opacity: "default" === u ? 1 : 0,
                                transition: "all 0.2s ease-out"
                            },
                            textAlign: "center",
                            weight: "semibold",
                            width: t,
                            children: "#"
                        }), (0, l.jsxs)("svg", {
                            fill: "none",
                            height: t,
                            style: {
                                transform: "colored" === u ? void 0 : "translate(0, ".concat(t, "px)"),
                                opacity: "colored" === u ? 1 : 0,
                                transition: "all 0.2s ease-out"
                            },
                            viewBox: "0 0 20 20",
                            width: t,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, l.jsx)("g", {
                                clipPath: "url(#clip0_877_1424)",
                                children: (0, l.jsx)("path", {
                                    clipRule: "evenodd",
                                    d: "M17.0711 17.0711C20.9764 13.1658 20.9764 6.83417 17.0711 2.92893C13.1659 -0.976311 6.83422 -0.97631 2.92898 2.92893C-0.976265 6.83418 -0.976265 13.1658 2.92898 17.0711C6.83422 20.9763 13.1659 20.9763 17.0711 17.0711ZM10 3.93909L3.93913 10L10 16.0609L16.061 10L10 3.93909Z",
                                    fill: "url(#paint0_linear_877_1424)",
                                    fillRule: "evenodd"
                                })
                            }), (0, l.jsxs)("defs", {
                                children: [(0, l.jsxs)("linearGradient", {
                                    gradientUnits: "userSpaceOnUse",
                                    id: "paint0_linear_877_1424",
                                    x1: "4.99993",
                                    x2: "17.1428",
                                    y1: "1.42857",
                                    y2: "16.4286",
                                    children: [(0, l.jsx)("stop", {
                                        stopColor: "#F23767"
                                    }), (0, l.jsx)("stop", {
                                        offset: "0.679099",
                                        stopColor: "#4363E6"
                                    }), (0, l.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#20A6D0"
                                    })]
                                }), (0, l.jsx)("clipPath", {
                                    id: "clip0_877_1424",
                                    children: (0, l.jsx)("rect", {
                                        fill: "white",
                                        height: "20",
                                        width: "20"
                                    })
                                })]
                            })]
                        })]
                    }))
                }
        },
        57740: function(e, n, t) {
            t.d(n, {
                Q: function() {
                    return j
                },
                l: function() {
                    return b
                }
            });
            var a = t(19989),
                i = t(24246),
                r = t(27378),
                l = t(76449),
                o = t(4402),
                s = t(86192),
                c = t(47892),
                u = t(53585),
                d = t(96150),
                m = t(316),
                y = t(6723),
                p = t(11652),
                f = (0, t(36332).V6)("hover rarity indicator"),
                g = t(14678),
                h = t(63479),
                x = t(76693);

            function k() {
                var e = (0, a.Z)([""]);
                return k = function() {
                    return e
                }, e
            }

            function v() {
                var e = (0, a.Z)(["\n  border-radius: 8px;\n  border: 2px solid\n    ", ";\n\n  &:hover {\n    border: 2px solid\n      ", ";\n  }\n"]);
                return v = function() {
                    return e
                }, e
            }
            var b = function(e) {
                    var n = e.dataKey,
                        a = e.compact,
                        l = (0, y.q)("components"),
                        c = (0, o.useFragment)(t(26258), n),
                        d = (0, x.k)(c.rankPercentile),
                        k = (0, r.useState)(!1),
                        v = k[0],
                        b = k[1];
                    return (0, s.Z)((function() {
                        v && f(c)
                    }), [v]), (0, i.jsx)(h.W, {
                        content: (0, i.jsxs)(u.g, {
                            children: [void 0 !== d && (0, i.jsx)(m.xv.Body, {
                                as: "div",
                                marginBottom: "2px",
                                size: "tiny",
                                weight: "semibold",
                                children: l("rarityIndicator.percentileBucket", "Top {{rarityPercentileBucket}}%", {
                                    rarityPercentileBucket: d
                                })
                            }), (0, i.jsx)(j, {
                                as: "div",
                                size: "tiny",
                                children: l("rarityIndicator.rank", "Rank: {{rank}} / {{totalSupply}}", {
                                    rank: (0, p.jf)(c.rank),
                                    totalSupply: (0, p.jf)(c.totalSupply)
                                })
                            }), c.rankCount && c.rankCount > 1 && (0, i.jsx)(m.xv.Body, {
                                color: "text.subtle",
                                size: "tiny",
                                weight: "semibold",
                                children: l("rarityIndicator.sharedRank", "({{count}} items share this rank)", {
                                    count: c.rankCount
                                })
                            })]
                        }),
                        onHide: function() {
                            return b(!1)
                        },
                        onShow: function() {
                            return b(!0)
                        },
                        children: (0, i.jsx)(u.g, {
                            children: (0, i.jsxs)(H, {
                                alignItems: "center",
                                height: a ? "24px" : "28px",
                                overflow: "hidden",
                                paddingLeft: a ? "6px" : "8px",
                                paddingRight: a ? "6px" : "8px",
                                children: [(0, i.jsx)(g.H, {
                                    compact: a,
                                    size: a ? 12 : 14,
                                    variant: v ? "colored" : "default"
                                }), (0, i.jsx)(m.xv.Body, {
                                    marginLeft: a ? "2px" : "3px",
                                    size: a ? "tiny" : "small",
                                    weight: "semibold",
                                    children: a && c.rank >= 1e4 ? "".concat((0, p.nZ)(c.rank, {
                                        digits: 0
                                    }), "+") : (0, p.jf)(c.rank)
                                })]
                            })
                        })
                    })
                },
                j = (0, c.ZP)(m.xv.Body).withConfig({
                    componentId: "sc-8fdbdd5b-0"
                })(k());
            j.defaultProps = {
                weight: "semibold"
            };
            var H = (0, c.ZP)(d.k).withConfig({
                componentId: "sc-8fdbdd5b-1"
            })(v(), (function(e) {
                return "light" === e.theme.type ? e.theme.colors.border : (0, l.DZ)(.9, "white")
            }), (function(e) {
                return "light" === e.theme.type ? (0, l._j)(.09, e.theme.colors.border) : (0, l.DZ)(.7, "white")
            }))
        },
        63479: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return T
                }
            });
            var a = t(85034),
                i = t(31373),
                r = t(19989),
                l = t(24246),
                o = (t(27378), t(76449)),
                s = t(74387),
                c = t(47892),
                u = t(48257),
                d = t(1569),
                m = t(81480),
                y = t(33181),
                p = t(53585),
                f = t(96150),
                g = t(72363),
                h = t(316),
                x = t(65175),
                k = t(6723),
                v = t(90761);

            function b() {
                var e = (0, r.Z)(["\n  &.tippy-box {\n    ", "\n  }\n\n  .tippy-arrow {\n    ", "\n  }\n"]);
                return b = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["\n  left: 0;\n  position: absolute;\n  right: 0;\n\n  ", "\n"]);
                return j = function() {
                    return e
                }, e
            }

            function H() {
                var e = (0, r.Z)(["\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 500;\n"]);
                return H = function() {
                    return e
                }, e
            }
            var T = function(e) {
                    var n = e.content,
                        t = (0, i.Z)(e, ["content"]),
                        r = (0, k.q)("components"),
                        o = (0, s.Z)((0, m._4)(g.AV.xl)),
                        c = (0, s.Z)((0, m.ip)(g.AV.xxl));
                    return (0, l.jsx)(S, (0, a.Z)({
                        appendTo: y.W6 ? void 0 : document.body,
                        content: (0, l.jsxs)(p.g, {
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: [n, (0, l.jsx)(f.k, {
                                alignItems: "center",
                                marginBottom: "6px",
                                marginTop: "10px",
                                children: (0, l.jsx)(P, {})
                            }), (0, l.jsx)(d.r, {
                                href: "https://support.opensea.io/hc/en-us/articles/7351055986323",
                                children: (0, l.jsxs)(F, {
                                    children: [r("rarityTooltip.rankedBy", "By OpenRarity"), (0, l.jsx)(u.J, {
                                        marginLeft: "-2px",
                                        marginRight: "-5px",
                                        size: 14,
                                        style: {
                                            verticalAlign: "text-bottom"
                                        },
                                        value: "chevron_right"
                                    })]
                                })
                            })]
                        }),
                        contentPadding: "12px 12px 8px",
                        hideOnScroll: !0,
                        interactive: !0,
                        popperOptions: {
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    padding: o ? 8 : c ? 56 : 24
                                }
                            }]
                        }
                    }, t))
                },
                S = (0, c.ZP)(x.u).withConfig({
                    componentId: "sc-c2c774dd-0"
                })(b(), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ink
                            },
                            light: {
                                backgroundColor: e.theme.colors.white,
                                boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)"
                            }
                        }
                    })
                }), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ink,
                                color: e.theme.colors.ink
                            },
                            light: {
                                backgroundColor: e.theme.colors.white,
                                color: e.theme.colors.white
                            }
                        }
                    })
                })),
                P = (0, c.ZP)(p.g).withConfig({
                    componentId: "sc-c2c774dd-1"
                })(j(), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                borderTop: "1px solid ".concat((0, o.DZ)(.8, e.theme.colors.darkGray))
                            },
                            light: {
                                borderTop: "1px solid ".concat(e.theme.colors.fog)
                            }
                        }
                    })
                })),
                F = (0, c.ZP)(h.xv.Body).attrs({
                    color: "text.subtle",
                    size: "tiny"
                }).withConfig({
                    componentId: "sc-c2c774dd-2"
                })(H())
        },
        32220: function(e, n, t) {
            t.d(n, {
                $1: function() {
                    return a.$
                },
                H7: function() {
                    return i.H
                },
                Q8: function() {
                    return r.Q
                },
                k6: function() {
                    return l.k
                }
            });
            var a = t(41480),
                i = t(14678),
                r = t(57740),
                l = t(76693)
        },
        41480: function(e, n, t) {
            t.d(n, {
                $: function() {
                    return r
                }
            });
            var a = t(4402),
                i = t(3443),
                r = function(e) {
                    var n = (0, i.c)("enable_rarity"),
                        r = n.enabled,
                        l = n.payload,
                        o = n.name,
                        s = (0, a.useFragment)(t(13311), e);
                    if (!r || !s) return {
                        isRarityEnabled: !1,
                        isRarityDisplayed: !1,
                        isEligibleForRarity: !1
                    };
                    var c = s.enabledRarities.includes("OPENRARITY"),
                        u = s.isEligibleForRarity;
                    if ("collection-restricted" === o) {
                        var d = l.value.split(","),
                            m = !!s.slug && d.includes(s.slug);
                        return {
                            isRarityEnabled: !0,
                            isEligibleForRarity: u,
                            isRarityDisplayed: u && c && m
                        }
                    }
                    return {
                        isRarityEnabled: !0,
                        isEligibleForRarity: u,
                        isRarityDisplayed: u && c
                    }
                }
        },
        76693: function(e, n, t) {
            t.d(n, {
                k: function() {
                    return i
                }
            });
            var a = [50, 40, 30, 25, 20, 15, 10, 5, 1, .1],
                i = function(e) {
                    var n = void 0;
                    return a.forEach((function(t) {
                        e <= t && (n = t)
                    })), n
                }
        },
        75856: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "quantity",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PriceHistoryGraph_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "TradeHistoryDataPoint",
                        kind: "LinkedField",
                        name: "results",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bucketStart",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bucketEnd",
                            storageKey: null
                        }, e, {
                            alias: null,
                            args: null,
                            concreteType: "AssetQuantityType",
                            kind: "LinkedField",
                            name: "volume",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "symbol",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "decimals",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "TradeHistoryType",
                    abstractKey: null
                }
            }();
            a.hash = "1db9ec6a82ce74a83e8735da3196b52e", n.default = a
        },
        39877: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    },
                    n = {
                        defaultValue: "WEEK",
                        kind: "LocalArgument",
                        name: "bucketSize"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cutoff"
                    },
                    i = {
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    },
                    r = {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    },
                    l = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "quantity",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, t, a],
                        kind: "Fragment",
                        metadata: null,
                        name: "PriceHistoryQuery",
                        selections: [{
                            args: [i, r, l, {
                                kind: "Variable",
                                name: "cutoff",
                                variableName: "cutoff"
                            }],
                            kind: "FragmentSpread",
                            name: "PriceHistory_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, a, t],
                        kind: "Operation",
                        name: "PriceHistoryQuery",
                        selections: [{
                            alias: null,
                            args: [i, r, l, {
                                kind: "Variable",
                                name: "minTime",
                                variableName: "cutoff"
                            }],
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TradeHistoryDataPoint",
                                kind: "LinkedField",
                                name: "results",
                                plural: !0,
                                selections: [o, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "volume",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "decimals",
                                            storageKey: null
                                        }, s, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, o, s],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketStart",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketEnd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ee3bf76f4f9c032b4142313cbc2f4e38",
                        id: null,
                        metadata: {},
                        name: "PriceHistoryQuery",
                        operationKind: "query",
                        text: "query PriceHistoryQuery(\n  $archetype: ArchetypeInputType\n  $bucketSize: BucketSize = WEEK\n  $cutoff: DateTime\n  $collection: CollectionSlug\n) {\n  ...PriceHistory_data_XmWqM\n}\n\nfragment PriceHistoryGraphV2_data on TradeHistoryType {\n  results {\n    bucketStart\n    quantity\n    volume {\n      asset {\n        decimals\n        symbol\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryGraph_data on TradeHistoryType {\n  results {\n    bucketStart\n    bucketEnd\n    quantity\n    volume {\n      asset {\n        symbol\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryStats_data on TradeHistoryType {\n  results {\n    quantity\n    volume {\n      asset {\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistory_data_XmWqM on Query {\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\n    ...PriceHistoryStats_data\n    ...PriceHistoryGraph_data\n    ...PriceHistoryGraphV2_data\n  }\n}\n"
                    }
                }
            }();
            a.hash = "bdc3076b56baeb73863c8ee5f703a06e", n.default = a
        },
        22565: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    }, {
                        defaultValue: "WEEK",
                        kind: "LocalArgument",
                        name: "bucketSize"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cutoff"
                    }],
                    n = {
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    },
                    t = {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    },
                    a = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "quantity",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "PriceHistoryRefetchableQuery",
                        selections: [{
                            args: [n, t, a, {
                                kind: "Variable",
                                name: "cutoff",
                                variableName: "cutoff"
                            }],
                            kind: "FragmentSpread",
                            name: "PriceHistory_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "PriceHistoryRefetchableQuery",
                        selections: [{
                            alias: null,
                            args: [n, t, a, {
                                kind: "Variable",
                                name: "minTime",
                                variableName: "cutoff"
                            }],
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TradeHistoryDataPoint",
                                kind: "LinkedField",
                                name: "results",
                                plural: !0,
                                selections: [i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "volume",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "decimals",
                                            storageKey: null
                                        }, r, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, i, r],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketStart",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketEnd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "9036acd6d064b4dfc98656a8aeeb09d0",
                        id: null,
                        metadata: {},
                        name: "PriceHistoryRefetchableQuery",
                        operationKind: "query",
                        text: "query PriceHistoryRefetchableQuery(\n  $archetype: ArchetypeInputType\n  $bucketSize: BucketSize = WEEK\n  $collection: CollectionSlug\n  $cutoff: DateTime\n) {\n  ...PriceHistory_data_XmWqM\n}\n\nfragment PriceHistoryGraphV2_data on TradeHistoryType {\n  results {\n    bucketStart\n    quantity\n    volume {\n      asset {\n        decimals\n        symbol\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryGraph_data on TradeHistoryType {\n  results {\n    bucketStart\n    bucketEnd\n    quantity\n    volume {\n      asset {\n        symbol\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryStats_data on TradeHistoryType {\n  results {\n    quantity\n    volume {\n      asset {\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistory_data_XmWqM on Query {\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\n    ...PriceHistoryStats_data\n    ...PriceHistoryGraph_data\n    ...PriceHistoryGraphV2_data\n  }\n}\n"
                    }
                }
            }();
            a.hash = "bcff7201a474670b0b939b6700c36362", n.default = a
        },
        82623: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "quantity",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PriceHistoryStats_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "TradeHistoryDataPoint",
                        kind: "LinkedField",
                        name: "results",
                        plural: !0,
                        selections: [e, {
                            alias: null,
                            args: null,
                            concreteType: "AssetQuantityType",
                            kind: "LinkedField",
                            name: "volume",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "decimals",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "TradeHistoryType",
                    abstractKey: null
                }
            }();
            a.hash = "322e2c6fcb01977f2129ecbd46064e43", n.default = a
        },
        15942: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "archetype"
                }, {
                    defaultValue: "WEEK",
                    kind: "LocalArgument",
                    name: "bucketSize"
                }, {
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "collection"
                }, {
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "cutoff"
                }],
                kind: "Fragment",
                metadata: {
                    refetch: {
                        connection: null,
                        fragmentPathInResult: [],
                        operation: t(22565)
                    }
                },
                name: "PriceHistory_data",
                selections: [{
                    alias: null,
                    args: [{
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    }, {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    }, {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }, {
                        kind: "Variable",
                        name: "minTime",
                        variableName: "cutoff"
                    }],
                    concreteType: "TradeHistoryType",
                    kind: "LinkedField",
                    name: "tradeHistory",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryStats_data"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryGraph_data"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryGraphV2_data"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "bcff7201a474670b0b939b6700c36362"
            };
            n.default = a
        },
        26258: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "RarityIndicator_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rank",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rankPercentile",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "totalSupply",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rankCount",
                    storageKey: null
                }],
                type: "RarityDataType",
                abstractKey: null,
                hash: "7feeda1cc1146edb3fc4caa5c4c09e1f"
            };
            n.default = a
        },
        13311: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useIsRarityEnabled_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "enabledRarities",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isEligibleForRarity",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "418f238777237318fdc11660120539ae"
            };
            n.default = a
        }
    }
]);
//# sourceMappingURL=16466-b3142e61d4d2d25a.js.map