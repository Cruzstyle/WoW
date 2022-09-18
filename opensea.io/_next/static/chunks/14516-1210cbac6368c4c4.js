"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14516], {
        72153: function(e, n, a) {
            a.d(n, {
                C: function() {
                    return v
                }
            });
            var i = a(85034),
                l = a(70169),
                r = a(31373),
                t = a(19989),
                s = a(24246),
                o = a(27378),
                d = a(47892),
                u = a(96728),
                c = a(53585),
                m = a(16611),
                p = a(90761),
                g = a(48257),
                y = a(17813);

            function h() {
                var e = (0, t.Z)(["\n  width: fit-content;\n  border-radius: 4px;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ", ";\n  color: ", ";\n\n  .Badge--icon {\n    margin-right: 4px;\n  }\n\n  .Badge--text {\n    ", "\n  }\n\n  ", "\n"]);
                return h = function() {
                    return e
                }, e
            }
            var f = {
                    PRIMARY: "primary",
                    SECONDARY: "secondary",
                    TERTIARY: "tertiary",
                    SUCCESS: "success",
                    WARNING: "warning",
                    ERROR: "error"
                },
                v = (0, o.forwardRef)((function(e, n) {
                    var a = e.text,
                        t = e.textVariant,
                        o = void 0 === t ? "small" : t,
                        d = e.icon,
                        u = e.iconSize,
                        c = void 0 === u ? 14 : u,
                        p = e.className,
                        h = e.variant,
                        f = e.imageUrl,
                        v = (0, r.Z)(e, ["text", "textVariant", "icon", "iconSize", "className", "variant", "imageUrl"]);
                    return (0, s.jsxs)(k, (0, l.Z)((0, i.Z)({
                        className: p,
                        ref: n,
                        variant: h
                    }, v), {
                        children: [f ? (0, s.jsx)(y.Z, {
                            alt: "",
                            size: c,
                            url: f
                        }) : null, d ? (0, s.jsx)(g.J, {
                            className: "Badge--icon",
                            size: c,
                            value: d
                        }) : null, a ? (0, s.jsx)(m.WX, {
                            as: "span",
                            className: "Badge--text",
                            variant: o,
                            children: a
                        }) : null]
                    }))
                })),
                k = (0, d.ZP)(c.g).withConfig({
                    componentId: "sc-5b05a974-0"
                })(h(), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return (0, u.variant)({
                        variants: (0, p.R0)(f, (function(n) {
                            return {
                                color: e.theme.colors.text.on[n]
                            }
                        }))
                    })
                }), (function(e) {
                    return (0, u.variant)({
                        variants: (0, p.R0)(f, (function(n) {
                            return {
                                backgroundColor: e.theme.colors[n],
                                color: e.theme.colors.text.on[n]
                            }
                        }))
                    })
                }))
        },
        60107: function(e, n, a) {
            a.d(n, {
                T: function() {
                    return s
                }
            });
            var i = a(24246),
                l = (a(27378), a(87481)),
                r = a(33181),
                t = {
                    staff: function(e) {
                        return e.isStaff
                    },
                    development: function() {
                        return r.v9 || r.rv
                    }
                },
                s = function(e) {
                    var n = e.flags,
                        a = e.children,
                        r = (0, l.b)();
                    return (null === n || void 0 === n ? void 0 : n.some((function(e) {
                        return t[e](r)
                    }))) ? (0, i.jsx)(i.Fragment, {
                        children: a
                    }) : null
                }
        },
        98286: function(e, n, a) {
            var i = a(19989),
                l = a(24246),
                r = (a(27378), a(47892)),
                t = a(82167),
                s = a(53585),
                o = a(87481),
                d = a(6723),
                u = (a(59809), a(63964)),
                c = a(28849);

            function m() {
                var e = (0, i.Z)(["\n  width: 100%;\n\n  .PrivateListingBanner--content {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 16px;\n    justify-content: center;\n    width: 100%;\n\n    .PrivateListingBanner--identity-sentence {\n      margin-right: 4px;\n\n      .PrivateListingBanner--account-link {\n        margin-left: 4px;\n        padding: 6px 0;\n        vertical-align: bottom;\n      }\n    }\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }
            n.Z = (0, u.d)((function(e) {
                var n, a, i = e.data,
                    r = (0, d.q)("components"),
                    u = (0, o.b)().wallet,
                    m = null === (n = null === i || void 0 === i ? void 0 : i.tradeSummary.bestAsk) || void 0 === n ? void 0 : n.maker,
                    g = m && u.isActiveAccount(m),
                    y = null === (a = null === i || void 0 === i ? void 0 : i.tradeSummary.bestAsk) || void 0 === a ? void 0 : a.taker,
                    h = g || y && u.isActiveAccount(y);
                if (!i || !y || !h) return null;
                var f = (0, l.jsx)(s.g, {
                    display: "inline-block",
                    children: (0, l.jsx)(t.e, {
                        className: "PrivateListingBanner--account-link",
                        dataKey: y,
                        mode: "light"
                    })
                });
                return (0, l.jsx)(p, {
                    children: (0, l.jsx)(c.Z, {
                        children: (0, l.jsx)("div", {
                            className: "PrivateListingBanner--content",
                            children: g ? (0, l.jsx)("div", {
                                className: "PrivateListingBanner--identity-sentence",
                                children: r("privateListingBanner.forOther", "This is a private listing that you made for {{identityPart}}.", {
                                    identityPart: f
                                })
                            }) : u.isActiveAccount(y) ? r("privateListingBanner.forYou", "This listing is reserved for you!") : null
                        })
                    })
                })
            }), a(46371));
            var p = r.ZP.div.withConfig({
                componentId: "sc-502e8a53-0"
            })(m())
        },
        28711: function(e, n, a) {
            a.d(n, {
                Z: function() {
                    return he
                }
            });
            var i, l = a(23842),
                r = a(19989),
                t = a(35230),
                s = a.n(t),
                o = a(24246),
                d = a(27378),
                u = a(64083),
                c = a(47892),
                m = a(43769),
                p = a(52963),
                g = a(13332),
                y = a(90141),
                h = a(81480),
                f = a(84919),
                v = a(38042),
                k = a(56656),
                x = a(16611),
                T = a(19378),
                b = a(38008),
                F = a(65175),
                S = a(82020),
                j = a(87481),
                A = a(59985),
                w = a(79790),
                K = a(82455),
                L = a(59809),
                C = a(63964),
                I = a(39738),
                P = a(20889),
                O = a(10412),
                _ = a(97516),
                N = a(11652),
                D = a(2034),
                B = a(66079),
                E = a(77795),
                M = a(4041),
                V = a(17813),
                Z = a(53585),
                R = a(33303),
                H = a(47762),
                z = function(e) {
                    var n = e.onClose,
                        a = e.onReviewListings;
                    return (0, H.n)((function() {
                        (0, K.Qz)()
                    })), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(T.u_.Header, {
                            children: (0, o.jsx)(T.u_.Title, {
                                children: "Cancel active listings"
                            })
                        }), (0, o.jsx)(T.u_.Body, {
                            children: (0, o.jsxs)(R.B, {
                                alignItems: "center",
                                children: [(0, o.jsx)(V.Z, {
                                    alt: "",
                                    url: "/static/images/lower-price-warning.png",
                                    width: 200
                                }), (0, o.jsx)(x.WX, {
                                    children: "When you lower the price of your item, we don\u2019t cancel the previous listing (to save gas). If you intend to remove the item from sale, review and cancel the listings."
                                })]
                            })
                        }), (0, o.jsxs)(T.u_.Footer, {
                            children: [(0, o.jsx)(k.zx, {
                                variant: "secondary",
                                onClick: function() {
                                    (0, K.vA)(), n(), null === a || void 0 === a || a()
                                },
                                children: "Review listings"
                            }), (0, o.jsx)(Z.g, {
                                marginLeft: "8px",
                                children: (0, o.jsx)(k.zx, {
                                    onClick: function() {
                                        (0, K.nF)(), n()
                                    },
                                    children: "Done"
                                })
                            })]
                        })]
                    })
                },
                W = a(85034),
                U = a(70169),
                Y = a(93451),
                Q = a(4402),
                $ = (a(2417), a(48257)),
                G = a(1569),
                X = a(72784),
                q = a(96150),
                J = a(69981),
                ee = a(13601),
                ne = a(2385),
                ae = a(99525),
                ie = a(30512),
                le = a(70343),
                re = a(26699),
                te = a(95601),
                se = a(56864);

            function oe() {
                var e = (0, r.Z)(["\n          color: ", ";\n        "]);
                return oe = function() {
                    return e
                }, e
            }

            function de() {
                var e = (0, r.Z)(["\n          color: ", ";\n        "]);
                return de = function() {
                    return e
                }, e
            }

            function ue() {
                var e = (0, r.Z)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n"]);
                return ue = function() {
                    return e
                }, e
            }
            var ce = null === (i = X.W.find((function(e) {
                    return "7" === e.value
                }))) || void 0 === i ? void 0 : i.value,
                me = function(e) {
                    var n, i = e.errorMessage,
                        r = e.placeholder,
                        t = e.onClose,
                        d = e.onSubmit,
                        u = e.paymentAssetOption,
                        c = e.previousAmount,
                        m = e.previousExpiration,
                        p = e.collection,
                        g = (0, Q.useFragment)(a(18193), null !== p && void 0 !== p ? p : null),
                        y = null === g || void 0 === g ? void 0 : g.statsV2.floorPrice,
                        h = (0, te.c)({
                            mode: "onChange",
                            defaultValues: {
                                isCustomExpiration: !1
                            }
                        }),
                        f = h.handleSubmit,
                        k = h.formState,
                        b = k.errors,
                        F = k.isValid,
                        S = k.isSubmitting,
                        j = h.setError,
                        A = h.control,
                        w = h.watch,
                        K = h.setValue,
                        L = (0, ee.W)(),
                        C = L.onReplace,
                        I = L.onNext,
                        P = w("newAmount"),
                        O = w("isCustomExpiration"),
                        _ = function() {
                            if (!y || !u.usdSpotPrice) return (0, N.bn)(0);
                            var e = (0, N.bn)(P).multipliedBy(u.usdSpotPrice);
                            return e.isGreaterThan(y.usd) ? (0, N.bn)(0) : N.O$.min((0, N.bn)(1).minus(e.div(y.usd)), .99).multipliedBy(100)
                        }(),
                        D = _.isGreaterThan(0),
                        B = _.isGreaterThan(re.N),
                        E = function() {
                            var e = (0, l.Z)(s().mark((function e(n) {
                                var a, i, r, u;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = n.newAmount, i = n.newExpirationDurationDays, r = n.isCustomExpiration, !(0, N.bn)(a).isLessThanOrEqualTo(0) || window.confirm("Are you sure you want to make this free?")) {
                                                e.next = 4;
                                                break
                                            }
                                            return j("newAmount", {
                                                type: "greaterThanZero",
                                                message: "Please try again with a positive price"
                                            }), e.abrupt("return");
                                        case 4:
                                            if (u = function() {
                                                    var e = (0, l.Z)(s().mark((function e() {
                                                        return s().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.prev = 0, e.next = 3, d({
                                                                        newAmount: a,
                                                                        newExpirationDurationDays: i,
                                                                        onClose: t,
                                                                        onNext: I,
                                                                        onReplace: C,
                                                                        isCustomExpiration: r
                                                                    });
                                                                case 3:
                                                                    e.next = 8;
                                                                    break;
                                                                case 5:
                                                                    e.prev = 5, e.t0 = e.catch(0), t();
                                                                case 8:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 5]
                                                        ])
                                                    })));
                                                    return function() {
                                                        return e.apply(this, arguments)
                                                    }
                                                }(), !B) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", I((0, o.jsx)(re.H, {
                                                priceWarningActionMessage: "Confirm listing",
                                                priceWarningHeader: "Confirm low listing price?",
                                                priceWarningMessage: (0, o.jsxs)(Z.g, {
                                                    children: ["Your updated listing will be", " ", (0, o.jsx)("b", {
                                                        children: "".concat((0, N.SG)(_, 0), "%")
                                                    }), " ", "below the floor price for this collection."]
                                                }),
                                                onClose: t,
                                                onConfirm: u
                                            })));
                                        case 7:
                                            return e.next = 9, u();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, o.jsxs)(R.B, {
                        as: "form",
                        onSubmit: f(E),
                        children: [(0, o.jsx)(T.u_.Header, {
                            children: (0, o.jsx)(T.u_.Title, {
                                children: "Lower the listing price"
                            })
                        }), (0, o.jsxs)(T.u_.Body, {
                            children: [(0, o.jsx)(Y.Qr, {
                                control: A,
                                name: "newAmount",
                                render: function(e) {
                                    var n = e.field;
                                    return (0, o.jsx)(v.XN, {
                                        autoFocus: !0,
                                        error: b[n.name],
                                        id: n.name,
                                        name: n.name,
                                        paymentAssetOptions: [u],
                                        paymentAssetRelayId: u.value,
                                        placeholder: r,
                                        price: n.value,
                                        warning: D ? (0, o.jsx)(pe, {
                                            warningSeverity: B ? le.dL.High : le.dL.Low,
                                            children: "This amount is below the collection floor price. Consider a higher price."
                                        }) : void 0,
                                        onChange: n.onChange
                                    })
                                },
                                rules: {
                                    validate: (0, U.Z)((0, W.Z)({}, (0, se.q8)({
                                        maxDecimals: null !== (n = u.decimals) && void 0 !== n ? n : 0
                                    })), {
                                        greaterThanPrevious: function(e) {
                                            return !e || (0, N.bn)(e).isLessThan(c) || "The new sale price must be lower than the current price. If you need to set a higher price, cancel the listing and re-list."
                                        }
                                    })
                                }
                            }), i && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("br", {}), (0, o.jsx)("p", {
                                    children: i
                                })]
                            }), (0, o.jsx)(Z.g, {
                                marginTop: "24px",
                                children: (0, o.jsx)(Y.Qr, {
                                    control: A,
                                    name: "newExpirationDurationDays",
                                    render: function(e) {
                                        var n = e.field;
                                        return (0, o.jsx)(J.l.Control, {
                                            error: b[n.name],
                                            htmlFor: n.name,
                                            label: (0, o.jsxs)(ae.i, {
                                                children: ["Use previous listing expiration date", (0, o.jsx)(ie.Z, {
                                                    checked: !O,
                                                    onChange: function(e) {
                                                        K("newExpirationDurationDays", e ? void 0 : ce), K("isCustomExpiration", !e)
                                                    }
                                                })]
                                            }),
                                            tip: O || null === m || void 0 === m ? void 0 : m.local().format("MMMM D, YYYY h:mma"),
                                            children: O ? (0, o.jsx)(ne.P, {
                                                clearable: !1,
                                                excludeSelectedOption: !0,
                                                id: n.name,
                                                options: X.W,
                                                placeholder: "Select a duration",
                                                readOnly: !0,
                                                startEnhancer: (0, o.jsx)($.J, {
                                                    value: "calendar_today"
                                                }),
                                                value: n.value,
                                                onSelect: function(e) {
                                                    return e && n.onChange(e.value)
                                                }
                                            }) : (0, o.jsx)(o.Fragment, {})
                                        })
                                    }
                                })
                            }), (0, o.jsx)(q.k, {
                                margin: "24px 0 8px",
                                children: (0, o.jsxs)(x.WX, {
                                    as: "span",
                                    variant: "small",
                                    children: ["You must pay an additional gas fee if you want to cancel this listing at a later point.", " ", (0, o.jsx)(G.r, {
                                        href: "https://support.opensea.io/hc/articles/4410153816723",
                                        target: "_blank",
                                        children: "Learn more about canceling listings"
                                    }), "."]
                                })
                            })]
                        }), (0, o.jsxs)(T.u_.Footer, {
                            children: [(0, o.jsx)(T.u_.Footer.Button, {
                                variant: "tertiary",
                                onClick: t,
                                children: "Never mind"
                            }), (0, o.jsx)(T.u_.Footer.Button, {
                                disabled: !F || S,
                                isLoading: S,
                                type: "submit",
                                children: "Set new price"
                            })]
                        })]
                    })
                },
                pe = c.ZP.div.withConfig({
                    componentId: "sc-a9fa6f11-0"
                })(ue(), (function(e) {
                    return e.warningSeverity === le.dL.High ? (0, c.iv)(oe(), e.theme.colors.error) : (0, c.iv)(de(), e.theme.colors.warning)
                }));

            function ge() {
                var e = (0, r.Z)(["\n      position: sticky;\n      top: 72px;\n      height: 81px;\n      border-top: none;\n      border-bottom: 1px solid ", ";\n\n      .OrderManager--cta-container {\n        max-width: 1280px;\n        margin: auto;\n        padding: 0 20px;\n      }\n    "]);
                return ge = function() {
                    return e
                }, e
            }

            function ye() {
                var e = (0, r.Z)(["\n  bottom: 0px;\n  position: fixed;\n  top: auto;\n  width: 100%;\n  right: 0px;\n  padding: 10px 20px;\n  z-index: ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  overflow-x: auto;\n\n  .OrderManager--cta-container {\n    align-items: center;\n    display: flex;\n    flex: 1 0;\n    justify-content: flex-end;\n\n    .OrderManager--second-button {\n      margin-right: 10px;\n    }\n  }\n\n  .Modal {\n    .OrderManager--cta-container {\n      margin: 10px 0px 20px;\n      justify-content: center;\n      .OrderManager--cta {\n        padding: 18px;\n      }\n    }\n    .OrderManager--modal-error-text {\n      color: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n\n  .OrderManager--loader {\n    display: flex;\n    justify-content: center;\n    margin-top: 32px;\n  }\n\n  ", "\n"]);
                return ye = function() {
                    return e
                }, e
            }
            var he = (0, C.d)((function(e) {
                    var n, a = e.data,
                        i = e.onOrdersChanged,
                        r = e.className,
                        t = e.sellRoute,
                        c = e.onReviewListings,
                        h = e.hasPendingListing,
                        C = e.chain,
                        E = e.variables.isBundle,
                        V = (0, d.useState)(!1),
                        Z = V[0],
                        R = V[1],
                        H = (0, d.useState)(!1),
                        W = H[0],
                        U = H[1],
                        Y = (0, w.e)(),
                        Q = Y.showSuccessMessage,
                        $ = Y.showErrorMessage,
                        G = (0, j.b)().wallet,
                        X = (0, p.C)().cancelOrders,
                        q = (0, y.k)().pollTransaction,
                        J = (0, A.N)(C),
                        ee = null !== (n = null === a || void 0 === a ? void 0 : a.bundleOrders) && void 0 !== n ? n : null === a || void 0 === a ? void 0 : a.orders,
                        ne = function() {
                            var e, n;
                            return null !== (n = null === a || void 0 === a || null === (e = a.asset) || void 0 === e ? void 0 : e.isCurrentlyFungible) && void 0 !== n && n
                        },
                        ae = function() {
                            return ie().length > 0
                        },
                        ie = function() {
                            return (0, L.v$)(ee)
                        },
                        le = function() {
                            var e;
                            return null != (null === a || void 0 === a || null === (e = a.asset) || void 0 === e ? void 0 : e.isEditable.value) && Boolean(a.asset.isEditable.value)
                        },
                        re = function() {
                            var e = (0, l.Z)(s().mark((function e() {
                                var n, a, l;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, U(!0), n = ie().filter((function(e) {
                                                return e.isFulfillable
                                            })).map((function(e) {
                                                return e.relayId
                                            })), e.next = 5, (0, m.getCancelOrdersAction)(n);
                                        case 5:
                                            return a = e.sent, e.next = 8, X(a);
                                        case 8:
                                            if (!(l = e.sent)) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 12, q({
                                                transactionHash: l.transactionHash,
                                                chain: l.chain
                                            });
                                        case 12:
                                            Q("Your listing has been canceled."), i(), R(!1), e.next = 19;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(0);
                                        case 19:
                                            return e.prev = 19, U(!1), e.finish(19);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 17, 19, 22]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        te = function() {
                            var e = (0, l.Z)(s().mark((function e(n) {
                                var l, r, t, d, m, p, y, h, f, v, k, x, T;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (l = n.newAmount, r = n.newExpirationDurationDays, t = n.onClose, d = n.onNext, m = n.onReplace, y = (0, L.v$)(ee)[0], h = (0, N.bn)(y.priceType.unit), f = (0, N.bn)(l || h), r ? v = (0, u.Z)(new Date, parseInt(r)) : y.closedAt && (v = (0, _.LE)(y.closedAt)), k = y.payment, x = y.item, T = function() {
                                                    var e;
                                                    i(), (0, K.MT)({
                                                        assetId: (null === a || void 0 === a || null === (e = a.asset) || void 0 === e ? void 0 : e.relayId) || "",
                                                        previousAmount: +h,
                                                        newAmount: +f
                                                    }), Q("Price successfully lowered"), m((0, o.jsx)(z, {
                                                        onClose: t,
                                                        onReviewListings: c
                                                    }))
                                                }, v) {
                                                e.next = 11;
                                                break
                                            }
                                            throw new Error("Could not determine a new expiration date");
                                        case 11:
                                            d((0, o.jsx)(g.q, {
                                                closedAt: v.toISOString(),
                                                isLowerListing: !0,
                                                item: {
                                                    asset: x.relayId,
                                                    quantity: y.itemQuantityType
                                                },
                                                openedAt: (0, D.tg)().toISOString(),
                                                price: {
                                                    paymentAsset: k.relayId,
                                                    amount: l
                                                },
                                                recipient: null === (p = y.taker) || void 0 === p ? void 0 : p.address,
                                                onEnd: T,
                                                onError: function(e) {
                                                    $((null === e || void 0 === e ? void 0 : e.message) || "Something went wrong while lowering your listing")
                                                }
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        se = function() {
                            var e, n;
                            return 0 !== +(0, N.bn)(null !== (n = null === a || void 0 === a || null === (e = a.asset) || void 0 === e ? void 0 : e.ownedQuantity) && void 0 !== n ? n : 0) && !(!ne() && ae())
                        },
                        oe = se() || ne(),
                        de = le() || ne(),
                        ue = !ne() && ae();
                    return (0, o.jsxs)(fe, {
                        className: r,
                        children: [(0, o.jsx)("div", {
                            className: "OrderManager--cta-container",
                            children: (0, o.jsx)(f.p, {
                                chainIdentifier: C,
                                children: (0, o.jsxs)(o.Fragment, {
                                    children: [(null === a || void 0 === a ? void 0 : a.asset) && de ? function(e) {
                                        var n = ne() ? "You do not own the entire item supply." : "You are not the creator of this item.";
                                        return (0, o.jsx)(F.u, {
                                            content: n,
                                            disabled: le(),
                                            children: (0, o.jsx)("span", {
                                                children: (0, o.jsx)(k.zx, {
                                                    className: "OrderManager--second-button",
                                                    disabled: !le(),
                                                    href: (0, P.K0)(e),
                                                    size: k.iY.medium,
                                                    variant: "secondary",
                                                    width: "166px",
                                                    children: "Edit"
                                                })
                                            })
                                        })
                                    }(a.asset) : null, ue ? (0, o.jsxs)(o.Fragment, {
                                        children: [function() {
                                            var e = (0, L.v$)(ee),
                                                n = (0, I.Ps)(e);
                                            return (0, o.jsx)(b.d, {
                                                size: "large",
                                                trigger: function(n) {
                                                    return (0, o.jsx)(o.Fragment, {
                                                        children: (0, o.jsxs)(k.zx, {
                                                            className: "OrderManager--second-button",
                                                            disabled: h,
                                                            minWidth: "166px",
                                                            size: k.iY.medium,
                                                            variant: J ? "secondary" : "primary",
                                                            onClick: function() {
                                                                (0, O.$F)(C) ? R(!0): n()
                                                            },
                                                            children: ["Cancel ", (0, B._6)("listing", e.length)]
                                                        })
                                                    })
                                                },
                                                children: function(e) {
                                                    return (0, o.jsx)(M.Z, {
                                                        variables: {
                                                            orderId: n.relayId
                                                        },
                                                        onClose: e,
                                                        onError: function(n) {
                                                            $((null === n || void 0 === n ? void 0 : n.message) || "Something went wrong while creating a listing"), e()
                                                        },
                                                        onOrderCancelled: i
                                                    })
                                                }
                                            })
                                        }(), function() {
                                            var e = (0, L.v$)(ee)[0],
                                                n = (0, N.bn)(e.priceType.unit),
                                                i = e.closedAt ? (0, _.pY)(e.closedAt) : void 0;
                                            if (!J || E) return null;
                                            var l = e.payment,
                                                r = (0, v.$3)(e.payment),
                                                t = (0, N.jf)(n, l.symbol);
                                            return (0, o.jsx)(b.d, {
                                                trigger: function(e) {
                                                    return (0, o.jsx)(k.zx, {
                                                        minWidth: "166px",
                                                        size: k.iY.medium,
                                                        onClick: function() {
                                                            var n;
                                                            (0, K.B)({
                                                                assetId: (null === a || void 0 === a || null === (n = a.asset) || void 0 === n ? void 0 : n.relayId) || ""
                                                            }), e()
                                                        },
                                                        children: "Lower price"
                                                    })
                                                },
                                                children: function(a) {
                                                    return (0, o.jsx)(me, {
                                                        collection: e.item.collection,
                                                        paymentAssetOption: r,
                                                        placeholder: t,
                                                        previousAmount: n,
                                                        previousExpiration: i,
                                                        onClose: a,
                                                        onSubmit: te
                                                    })
                                                }
                                            })
                                        }()]
                                    }) : null, oe ? function() {
                                        var e, n, a = null !== (n = null === (e = G.activeAccount) || void 0 === e ? void 0 : e.isCompromised) && void 0 !== n && n;
                                        return (0, o.jsx)(F.u, {
                                            content: S.p,
                                            disabled: !a,
                                            children: (0, o.jsx)("span", {
                                                children: (0, o.jsx)(k.zx, {
                                                    className: "OrderManager--second-button",
                                                    disabled: !se() || a,
                                                    href: t,
                                                    size: k.iY.medium,
                                                    width: "166px",
                                                    children: "Sell"
                                                })
                                            })
                                        })
                                    }() : null]
                                })
                            })
                        }), function() {
                            var e = (0, L.v$)(ee).length,
                                n = function() {
                                    return R(!1)
                                },
                                a = (0, B._6)("listing", e);
                            return (0, o.jsxs)(T.u_, {
                                isOpen: Z,
                                onClose: n,
                                children: [(0, o.jsx)(T.u_.Header, {
                                    children: (0, o.jsxs)(T.u_.Title, {
                                        children: ["Cancel ", a, "?"]
                                    })
                                }), (0, o.jsx)(T.u_.Body, {
                                    children: (0, o.jsxs)(x.WX, {
                                        children: ["This will cancel your ", a, ". You will also be asked to confirm this cancelation from your wallet."]
                                    })
                                }), (0, o.jsxs)(T.u_.Footer, {
                                    children: [(0, o.jsx)(T.u_.Footer.Button, {
                                        variant: "tertiary",
                                        onClick: n,
                                        children: "Go back"
                                    }), (0, o.jsx)(T.u_.Footer.Button, {
                                        disabled: W || h,
                                        isLoading: W,
                                        onClick: re,
                                        children: "Continue"
                                    })]
                                })]
                            }, "CancelModal")
                        }()]
                    })
                }), a(88486)),
                fe = c.ZP.div.withConfig({
                    componentId: "sc-4a2a58cd-0"
                })(ye(), E.k.MANAGER_BAR, (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.error
                }), (0, h.FD)({
                    tabletL: (0, c.iv)(ge(), (function(e) {
                        return e.theme.colors.border
                    }))
                }))
        },
        5984: function(e, n, a) {
            a.d(n, {
                j: function() {
                    return de
                }
            });
            var i = a(85034),
                l = a(19989),
                r = a(24246),
                t = a(27378),
                s = a(12476),
                o = a(71636),
                d = a.n(o),
                u = a(4402),
                c = a(47892),
                m = a(74044),
                p = a(86694),
                g = a(37533),
                y = a(72153),
                h = a(53585),
                f = a(16611),
                v = a(6723),
                k = a(97516),
                x = a(51840),
                T = a(24140),
                b = function(e) {
                    var n = e.moment,
                        a = (0, x.Z)();
                    return (0, T.Z)(a, 1e3), (0, r.jsx)(r.Fragment, {
                        children: (0, k.LU)(d().duration(n.diff(d().utc())))
                    })
                },
                F = function(e) {
                    var n = e.prefix,
                        a = void 0 === n ? "" : n,
                        i = e.postfix,
                        l = void 0 === i ? "" : i,
                        t = e.includeDate,
                        s = void 0 === t || t,
                        o = e.endMoment,
                        u = e.includeCountDown,
                        c = void 0 === u || u,
                        m = (0, v.q)("components"),
                        p = o ? d()(o).local().startOf("day") : void 0,
                        g = d()().startOf("day"),
                        y = d()(g).add(1, "day"),
                        x = o && s ? "".concat(o.local().format("MMMM D, YYYY [at] h:mma"), " \n  ").concat((0, k.Ze)()) : "",
                        T = (0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: c ? "(".concat(x, ")") : x
                        }),
                        F = o && p && c ? p.isSameOrBefore(y) ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: p.isSame(g) ? m("expiration.today", "today") : m("expiration.tomorrow", "tomorrow")
                            }), "\xa0", m("expiration.in", "in"), "\xa0", (0, r.jsx)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: (0, r.jsx)(b, {
                                    moment: o
                                })
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: ["\xa0", m("expiration.in", "in"), "\xa0", (0, r.jsxs)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: [d().duration(p.diff(g, "days"), "days").asDays(), " ", m("expiration.days", "days")]
                            })]
                        }) : null,
                        S = (0, r.jsx)(r.Fragment, {
                            children: "\xa0"
                        });
                    return (0, r.jsxs)(h.g, {
                        display: "inline",
                        children: [(0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: a
                        }), a ? S : null, F, F ? S : null, T, S, (0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: l
                        })]
                    })
                },
                S = a(48257),
                j = a(81480),
                A = a(46322),
                w = a(94762),
                K = a(40306),
                L = a(96150),
                C = a(72686),
                I = a(11652);

            function P() {
                var e = (0, l.Z)(["\n          margin-right: 32px;\n        "]);
                return P = function() {
                    return e
                }, e
            }

            function O() {
                var e = (0, l.Z)(["\n          margin-right: 50px;\n        "]);
                return O = function() {
                    return e
                }, e
            }

            function _() {
                var e = (0, l.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  .Timer--time-unit {\n    :not(:last-child) {\n      margin-right: 16px;\n\n      ", "\n    }\n\n    .Timer--numbers {\n      color: ", ";\n    }\n  }\n"]);
                return _ = function() {
                    return e
                }, e
            }
            var N = function(e) {
                    var n = e.endMoment,
                        a = e.className,
                        i = (0, v.q)("components"),
                        l = n ? new Date(n) : new Date,
                        o = (0, t.useState)(new Date),
                        d = o[0],
                        u = o[1],
                        c = (0, t.useState)((0, A.Z)({
                            start: d,
                            end: l
                        })),
                        m = c[0],
                        p = c[1];
                    (0, T.Z)((function() {
                        if ((0, w.Z)(d, l)) {
                            var e = (0, K.Z)(d, {
                                seconds: 1
                            });
                            u(e), p((0, A.Z)({
                                start: e,
                                end: l
                            }))
                        }
                    }), 1e3);
                    var g, y, k, x = (0, s.Z)(l, d),
                        b = null !== (g = m.hours) && void 0 !== g ? g : 0,
                        F = null !== (y = m.minutes) && void 0 !== y ? y : 0,
                        S = null !== (k = m.seconds) && void 0 !== k ? k : 0,
                        j = x <= 0 && b <= 0;
                    return n ? (0, r.jsx)(D, {
                        lessThanOneHourRemains: j,
                        children: (0, r.jsxs)(L.k, {
                            className: a,
                            flexWrap: "wrap",
                            children: [x > 0 ? (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, I.pY)(x, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.days", "Days")
                                })]
                            }) : null, (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, I.pY)(b, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.hours", "Hours")
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, I.pY)(F, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.minutes", "Minutes")
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, I.pY)(S, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.seconds", "Seconds")
                                })]
                            })]
                        })
                    }) : (0, r.jsx)(D, {
                        lessThanOneHourRemains: j,
                        children: (0, r.jsxs)(L.k, {
                            className: a,
                            children: [(0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(C.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.days", "Days")
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(C.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.hours", "Hours")
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(C.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.minutes", "Minutes")
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(C.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: i("timer.seconds", "Seconds")
                                })]
                            })]
                        })
                    })
                },
                D = (0, c.ZP)(h.g).withConfig({
                    componentId: "sc-daac9bce-0"
                })(_(), (0, j.FD)({
                    phoneM: (0, c.iv)(P()),
                    mobile: (0, c.iv)(O())
                }), (function(e) {
                    return e.lessThanOneHourRemains ? e.theme.colors.error : e.theme.colors.text.heading
                })),
                B = a(48727),
                E = a(84919),
                M = a(33181),
                V = a(56656),
                Z = a(31893),
                R = a(9476),
                H = a(99525),
                z = a(65175),
                W = a(33303),
                U = a(51764),
                Y = a(82020),
                Q = a(87481),
                $ = a(32909),
                G = a(29250),
                X = a(99887),
                q = a(82455),
                J = a(71650),
                ee = a(59809),
                ne = a(33609),
                ae = a(47366),
                ie = a(90761),
                le = a(72984),
                re = a(65457);

            function te() {
                var e = (0, l.Z)(["\n  border-top-right-radius: ", ";\n  border-top-left-radius: ", ";\n\n  padding: 10px;\n\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  font-weight: initial;\n  padding: 20px;\n\n  ", "\n\n  .TradeStation--header-icon-help {\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  .TradeStation--header-dutch-final-price {\n    display: inline-flex;\n    color: inherit;\n  }\n"]);
                return te = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, l.Z)(["\n      .TradeStation--main {\n        padding: 20px;\n      }\n    "]);
                return se = function() {
                    return e
                }, e
            }

            function oe() {
                var e = (0, l.Z)(["\n  .TradeStation--main {\n    background-color: ", ";\n    padding: 12px;\n\n    .TradeStation--ask-label {\n      color: ", ";\n    }\n\n    .TradeStation--price-container {\n      display: flex;\n      flex-wrap: wrap;\n      margin-bottom: 8px;\n\n      .TradeStation--quantity-badge {\n        margin: auto 8px auto 0;\n      }\n\n      .TradeStation--price {\n        font-size: 30px;\n      }\n\n      .TradeStation--fiat-price {\n        font-size: 15px;\n        margin-left: 8px;\n        margin-top: 15px;\n      }\n\n      .TradeStation--price-auction-icon {\n        background-color: ", ";\n        border-radius: 22px;\n        color: ", ";\n        height: 24px;\n        margin-left: 4px;\n        width: 24px;\n\n        &.TradeStation--price-auction-icon-dutch {\n          transform: rotate(270deg);\n        }\n\n        &.TradeStation--price-auction-icon-rising {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n\n  .TradeStation--modal {\n    display: inline-block;\n  }\n\n  ", "\n"]);
                return oe = function() {
                    return e
                }, e
            }
            var de = function(e) {
                    var n, l, o = e.archetypeData,
                        c = e.bundleData,
                        f = e.data,
                        x = e.tradeLimitsDataKey,
                        T = e.onOrdersChanged,
                        b = e.hasPendingListing,
                        j = (0, v.q)("components"),
                        A = (0, Q.b)(),
                        w = A.wallet,
                        K = (0, u.useFragment)(a(43825), f),
                        C = (0, u.useFragment)(a(18696), c),
                        P = (0, u.useFragment)(a(48453), o),
                        O = (0, u.useFragment)(a(74201), x),
                        _ = K.bestAsk,
                        D = "AssetBundleType" === (null === _ || void 0 === _ ? void 0 : _.item.__typename),
                        ie = (0, k.pY)((null === _ || void 0 === _ ? void 0 : _.openedAt) || "").local(),
                        te = (0, $.j)(ie.toDate(), "ENGLISH" === (null === _ || void 0 === _ ? void 0 : _.orderType) ? "bid on" : "buy"),
                        se = (0, t.useMemo)((function() {
                            var e, n;
                            return new J.mb({
                                eventSource: "TradeStation",
                                itemId: null === _ || void 0 === _ ? void 0 : _.item.relayId,
                                assetId: null === _ || void 0 === _ ? void 0 : _.item.relayId,
                                collectionSlug: null === (e = null === _ || void 0 === _ ? void 0 : _.item.collection) || void 0 === e ? void 0 : e.slug,
                                assetContractAddress: null === (n = null === _ || void 0 === _ ? void 0 : _.item.assetContract) || void 0 === n ? void 0 : n.address,
                                tokenId: null === _ || void 0 === _ ? void 0 : _.item.tokenId,
                                chainId: null === _ || void 0 === _ ? void 0 : _.item.chain.identifier,
                                usdValue: null === _ || void 0 === _ ? void 0 : _.priceType.usd,
                                tokenQuantity: null === _ || void 0 === _ ? void 0 : _.priceType.unit,
                                symbol: null === _ || void 0 === _ ? void 0 : _.payment.symbol
                            })
                        }), [_]),
                        oe = function(e) {
                            return !C && !(0, ae.N)(e)
                        },
                        de = function(e) {
                            return (0, r.jsx)(U.z, {
                                asset: P,
                                bundle: C,
                                collection: null,
                                tradeDataKey: K,
                                tradeLimitsDataKey: O,
                                onClose: e,
                                onOrderCreated: T
                            })
                        },
                        me = function(e) {
                            var n, a, i = e.onClick,
                                l = e.assetRelayId,
                                t = e.isDisabled,
                                s = void 0 !== t && t,
                                o = null !== (a = null === (n = w.activeAccount) || void 0 === n ? void 0 : n.isCompromised) && void 0 !== a && a,
                                d = o ? Y.p : void 0,
                                u = !D && !(null === P || void 0 === P ? void 0 : P.isBiddingEnabled.value),
                                c = D ? void 0 : function(e) {
                                    if (e) switch (e) {
                                        case "This NFT is in a bad state. Ask the owner to list on OpenSea":
                                            return j("trade.station.biddingDisabled.offerNotPossible", "Offers can\u2019t currently be made on this Solana NFT. This issue is resolved if listed on OpenSea.");
                                        case "Cannot bid on NFT without owner":
                                            return j("trade.station.biddingDisabled.noOwner", "This SOL NFT doesn\u2019t have an owner, so no offers can be made on it. This often happens when an NFT is burned.");
                                        default:
                                            return e
                                    }
                                }(null === P || void 0 === P ? void 0 : P.isBiddingEnabled.reason),
                                m = null !== d && void 0 !== d ? d : c,
                                p = !m;
                            return (0, r.jsx)(z.u, {
                                content: m,
                                disabled: p,
                                children: (0, r.jsx)(Z.O, {
                                    marginLeft: [0, 0, 0, "8px"],
                                    marginTop: ["8px", "8px", "8px", 0],
                                    width: ["100%", "100%", "100%", "50%"],
                                    children: (0, r.jsx)(V.zx, {
                                        disabled: s || o || u,
                                        icon: "local_offer",
                                        variant: "secondary",
                                        width: "100%",
                                        onClick: function() {
                                            l && (0, X.TA)({
                                                assetId: l
                                            }), i()
                                        },
                                        children: j("trade.station.makeOffer", "Make offer")
                                    })
                                })
                            })
                        };
                    if (!_) return function() {
                        var e = P;
                        if (!e) return null;
                        if (!e.isListable) return null;
                        var n = (0, ee.t3)(e.assetOwners);
                        if ((null === n || void 0 === n ? void 0 : n.owner) && w.isActiveAccount(n.owner)) return null;
                        var a = K.bestBid,
                            i = e.verificationStatus;
                        return (0, r.jsx)(ce, {
                            children: (0, r.jsx)(B.ZP, {
                                children: (0, r.jsxs)("div", {
                                    className: "TradeStation--main",
                                    children: [a ? (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            className: "TradeStation--ask-label",
                                            children: j("trade.station.bestOffer", "Best offer")
                                        }), (0, r.jsx)("div", {
                                            className: "TradeStation--price-container",
                                            children: (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(m.O, {
                                                    className: "TradeStation--price TradeStation--price",
                                                    order: a
                                                }), (0, r.jsx)(p.v, {
                                                    className: "TradeStation--fiat-price TradeStation--fiat-price",
                                                    order: a,
                                                    secondary: !0
                                                })]
                                            })
                                        })]
                                    }) : null, (0, r.jsx)(E.p, {
                                        chainIdentifier: e.assetContract.chain,
                                        children: (0, r.jsx)(re.w, {
                                            assetId: e.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: de,
                                            shouldVerifyCollectionDetails: oe(i),
                                            trigger: function(n) {
                                                return me({
                                                    onClick: n,
                                                    assetRelayId: e.relayId
                                                })
                                            }
                                        })
                                    })]
                                })
                            })
                        })
                    }();
                    if (!_.maker) return null;
                    var pe, ge, ye, he, fe, ve = K.bestBid,
                        ke = null === (n = _.englishAuctionReservePriceType) || void 0 === n ? void 0 : n.unit,
                        xe = _.dutchAuctionFinalPriceType,
                        Te = _.orderType,
                        be = _.closedAt ? (0, k.pY)(_.closedAt) : void 0,
                        Fe = be ? d().duration(be.diff(d().utc())).asHours() : void 0,
                        Se = void 0 !== Fe && Fe < 0 && "ENGLISH" === Te && !!ve,
                        je = (0, I.bn)(_.remainingQuantityType),
                        Ae = "DUTCH" === Te && xe && (0, I.bn)(_.priceType.unit).isGreaterThan(xe.unit),
                        we = "DUTCH" === Te && xe && (0, I.bn)(_.priceType.unit).isLessThan(xe.unit),
                        Ke = _.priceFnEndedAt ? (0, k.pY)(_.priceFnEndedAt) : void 0,
                        Le = be,
                        Ce = null === Ke || void 0 === Ke ? void 0 : Ke.isSameOrBefore(d()()),
                        Ie = _.payment.symbol,
                        Pe = "WETH" === Ie ? "ETH" : Ie,
                        Oe = (null === ve || void 0 === ve ? void 0 : ve.payment.relayId) === _.payment.relayId,
                        _e = function() {
                            if (!ke) return "";
                            var e = Oe && (0, I.bn)(ve.priceType.unit).isGreaterThanOrEqualTo(ke),
                                n = w.isActiveAccount(_.maker) ? j("trade.station.ownerPart", "of {{price}} {{symbol}}", {
                                    price: (0, I.jf)(ke, Ie),
                                    symbol: Pe
                                }, {
                                    forceString: !0
                                }) : "";
                            return e ? j("trade.station.reserveMet", " -- Reserve price {{ownerPart}} met!", {
                                ownerPart: n
                            }) : j("trade.station.reserveNotMet", " -- Reserve price {{ownerPart}} not met.", {
                                ownerPart: n
                            })
                        }(),
                        Ne = ie.isAfter(d()()),
                        De = Oe && (0, I.bn)(ve.priceType.unit).isGreaterThan(_.priceType.unit),
                        Be = _.item.verificationStatus,
                        Ee = function() {
                            (0, q.sy)(_.item)
                        },
                        Me = function() {
                            (0, q.$)(_.item)
                        },
                        Ve = oe(Be),
                        Ze = Le ? (0, s.Z)(new Date(Le.format()), new Date) : void 0,
                        Re = void 0 !== Ze && Ze < 3,
                        He = w.isActiveAccount(_.maker),
                        ze = (0, G.gQ)(A, I.O$.maximum(_.perUnitPriceType.usd, null !== (pe = null === ve || void 0 === ve ? void 0 : ve.perUnitPriceType.usd) && void 0 !== pe ? pe : 0)),
                        We = null !== (ge = null === (l = w.activeAccount) || void 0 === l ? void 0 : l.isCompromised) && void 0 !== ge && ge,
                        Ue = He || Ne || We || ze,
                        Ye = _.item.chain.identifier,
                        Qe = w.getActiveAccountKey(),
                        $e = {
                            chain: Ye,
                            orderId: _.relayId,
                            paymentAsset: _.payment.relayId,
                            identity: {
                                address: null === Qe || void 0 === Qe ? void 0 : Qe.address
                            },
                            addressForPaymentBalance: null !== (ye = null === Qe || void 0 === Qe ? void 0 : Qe.address) && void 0 !== ye ? ye : ""
                        },
                        Ge = "ENGLISH" !== Te,
                        Xe = We ? Y.p : void 0,
                        qe = He ? j("trade.station.youOwn", "You own this item.") : void 0,
                        Je = null !== (he = null !== Xe && void 0 !== Xe ? Xe : qe) && void 0 !== he ? he : Ne ? te : void 0,
                        en = function(e) {
                            return b ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)(Z.O, {
                                width: {
                                    _: "100%",
                                    xl: Ge ? "50%" : "100%"
                                },
                                children: (0, r.jsx)(V.zx, {
                                    disabled: Ue,
                                    icon: "account_balance_wallet",
                                    width: "100%",
                                    onClick: function() {
                                        "ENGLISH" !== Te && se.trackClickBuyNow(), e && e()
                                    },
                                    children: "ENGLISH" === Te ? j("trade.station.placeBid", "Place bid") : C ? j("trade.station.buyBundle", "Buy bundle") : j("trade.station.buyNow", "Buy now")
                                })
                            })
                        },
                        nn = (0, r.jsxs)("div", {
                            className: "TradeStation--main",
                            children: [!b && (0, r.jsxs)("div", {
                                className: "TradeStation--ask-label",
                                children: ["ENGLISH" !== Te ? j("trade.station.currentPrice", "Current price") : De ? j("trade.station.topBid", "Top bid") : j("trade.station.minimumBid", "Minimum bid"), _e]
                            }), (0, r.jsxs)("div", {
                                className: "TradeStation--price-container",
                                children: [je.isGreaterThan(1) ? (0, r.jsx)(z.u, {
                                    content: j("trade.station.quantityAtPrice.tip", "Quantity: {{bestAskRemainingQuantity}}", {
                                        bestAskRemainingQuantity: je
                                    }),
                                    children: (0, r.jsx)(y.C, {
                                        className: "TradeStation--quantity-badge",
                                        icon: "filter_none",
                                        text: "x".concat(je)
                                    })
                                }) : null, "ENGLISH" === Te && ve && De ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(m.O, {
                                        className: "TradeStation--price",
                                        order: ve,
                                        size: 24,
                                        variant: "perUnit"
                                    }), (0, r.jsx)(p.v, {
                                        className: "TradeStation--fiat-price",
                                        order: ve,
                                        secondary: !0,
                                        variant: "perUnit"
                                    })]
                                }) : function() {
                                    if (b) return (0, r.jsx)(r.Fragment, {});
                                    var e = (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(m.O, {
                                            className: "TradeStation--price",
                                            order: _,
                                            size: 24,
                                            variant: "perUnit"
                                        }), (0, r.jsx)(p.v, {
                                            className: "TradeStation--fiat-price",
                                            order: _,
                                            secondary: !0,
                                            variant: "perUnit"
                                        })]
                                    });
                                    return M.W6 ? e : (0, r.jsx)(t.Suspense, {
                                        fallback: (0, r.jsx)(R.aN, {}),
                                        children: e
                                    })
                                }(), (Ae || we) && !Ce || "ENGLISH" === Te ? (0, r.jsx)(W.B, {
                                    children: (0, r.jsx)(z.u, {
                                        content: "DUTCH" === Te ? (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("div", {
                                                children: we ? j("trade.station.priceAction.priceIncreasing", "Price increasing") : j("trade.station.priceAction.priceDeclining", "Price declining")
                                            }), (0, r.jsx)("div", {
                                                children: j("trade.station.priceActionDescription", "The buy-it-now price is {{action}} from {{bestAskOrder}} to {{bestAskPayment}}, ending {{expiration}}", {
                                                    action: we ? j("trade.station.priceAction.increasing", "increasing") : j("trade.station.priceAction.declining", "declining"),
                                                    bestAskOrder: (0, r.jsx)(h.g, {
                                                        display: "inline",
                                                        verticalAlign: "sub",
                                                        children: (0, r.jsx)(m.O, {
                                                            color: "white",
                                                            isInline: !0,
                                                            order: _
                                                        })
                                                    }),
                                                    bestAskPayment: (0, r.jsx)(h.g, {
                                                        display: "inline",
                                                        verticalAlign: "sub",
                                                        children: (0, r.jsx)(g.G, (0, i.Z)({
                                                            color: "white",
                                                            isInline: !0,
                                                            price: (0, I.bn)(null !== (fe = null === xe || void 0 === xe ? void 0 : xe.unit) && void 0 !== fe ? fe : "0")
                                                        }, (0, g.C)(_.payment)))
                                                    }),
                                                    expiration: (0, r.jsx)(h.g, {
                                                        display: "inline",
                                                        verticalAlign: "middle",
                                                        children: (0, r.jsx)(F, {
                                                            endMoment: Le
                                                        })
                                                    })
                                                })
                                            })]
                                        }) : j("trade.station.highBidderWins", "The highest bidder will win the item at the end of the auction."),
                                        children: (0, r.jsx)(S.J, {
                                            "aria-label": "DUTCH" === Te ? j("trade.station.priceAction.priceDecreasing", "Price decreasing") : j("trade.station.priceAction.priceIncreasing", "Price increasing"),
                                            className: (0, ne.A)("TradeStation", {
                                                "price-auction-icon": !0,
                                                "price-auction-icon-dutch": "DUTCH" === Te,
                                                "price-auction-icon-rising": we || "ENGLISH" === Te
                                            }),
                                            cursor: "pointer",
                                            value: "transit_enterexit"
                                        })
                                    })
                                }) : null]
                            }), (0, r.jsx)(h.g, {
                                display: ["block", "block", "block", "flex"],
                                maxWidth: ["100%", "100%", "100%", "420px"],
                                children: (0, r.jsx)(E.p, {
                                    chainIdentifier: Ye,
                                    overrides: {
                                        unsupportedModalButton: {
                                            style: {
                                                width: "100%",
                                                display: "contents"
                                            }
                                        }
                                    },
                                    children: Ue ? (0, r.jsx)(z.u, {
                                        content: ze ? j("trade.station.cannotComplete", "This transaction cannot be completed at this time") : Je,
                                        placement: "right",
                                        children: en()
                                    }) : (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(re.w, {
                                            assetId: _.item.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: "ENGLISH" === Te ? de : function(e) {
                                                return Qe ? (0, r.jsx)(le.B, {
                                                    variables: $e,
                                                    onClose: e
                                                }) : null
                                            },
                                            shouldVerifyCollectionDetails: Ve,
                                            trigger: en,
                                            onClose: Ee,
                                            onPrevious: Me
                                        }), Ge ? (0, r.jsx)(re.w, {
                                            assetId: _.item.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: de,
                                            shouldVerifyCollectionDetails: Ve,
                                            trigger: function(e) {
                                                return me({
                                                    onClick: e,
                                                    assetRelayId: _.item.relayId,
                                                    isDisabled: Ue
                                                })
                                            },
                                            onClose: Ee,
                                            onPrevious: Me
                                        }) : null]
                                    })
                                })
                            })]
                        });
                    return !_.priceFnEndedAt && !be || Ce ? (0, r.jsx)(ce, {
                        children: (0, r.jsx)(B.ZP, {
                            children: nn
                        })
                    }) : (0, r.jsx)(J.LW.Provider, {
                        value: {
                            tracker: se
                        },
                        children: (0, r.jsx)(ce, {
                            children: (0, r.jsxs)(B.ZP, {
                                children: [!b && (0, r.jsxs)(ue, {
                                    className: "TradeStation--header",
                                    children: [(0, r.jsxs)(H.i, {
                                        alignItems: "center",
                                        children: [(0, r.jsxs)(L.k, {
                                            children: [Re ? null : (0, r.jsx)(L.k, {
                                                alignItems: "center",
                                                marginRight: "4px",
                                                children: (0, r.jsx)(S.J, {
                                                    className: "TradeStation--header-icon",
                                                    value: Se ? "gavel" : "schedule"
                                                })
                                            }), Se ? (0, r.jsx)(h.g, {
                                                children: j("trade.station.auction.sold", "Sold! Matching orders on the blockchain.")
                                            }) : (0, r.jsx)(F, {
                                                endMoment: Le,
                                                includeCountDown: !1,
                                                includeDate: !0,
                                                postfix: xe ? j("trade.station.auction.soldAt", "at {{price}}", {
                                                    price: (0, r.jsx)(g.G, (0, i.Z)({
                                                        className: "TradeStation--header-dutch-final-price",
                                                        price: (0, I.bn)(xe.unit)
                                                    }, (0, g.C)(_.payment)))
                                                }) : void 0,
                                                prefix: be ? j("trade.station.auction.saleEnds", "Sale ends") : we ? j("trade.station.auction.priceIncreaseEnds", "Price increase ends") : j("trade.station.auction.priceDeclineEnds", "Price decline ends")
                                            })]
                                        }), "DUTCH" === Te || "ENGLISH" === Te ? (0, r.jsx)(z.u, {
                                            content: "DUTCH" === Te ? (0, r.jsx)(h.g, {
                                                children: we ? j("trade.station.auction.increasingPrice", "Increasing Price Auction{{break}}The price of this item increases over time. It can be bought by anyone at any point during the duration of the auction.", {
                                                    break: (0, r.jsx)("br", {})
                                                }) : j("trade.station.auction.decliningPrice", "Declining Price Auction{{break}}The price of this item decreases over time. It can be bought by anyone at any point during the duration of the auction.", {
                                                    break: (0, r.jsx)("br", {})
                                                })
                                            }) : (0, r.jsx)(h.g, {
                                                children: j("trade.station.auction.extending", "Extending Auction{{break}}A new highest bid placed under 10 minutes remaining will extend the auction by an additional 10 minutes.", {
                                                    break: (0, r.jsx)("br", {})
                                                })
                                            }),
                                            children: (0, r.jsx)(S.J, {
                                                className: "TradeStation--header-icon-help",
                                                cursor: "pointer",
                                                value: "help_outline"
                                            })
                                        }) : null]
                                    }), Re ? (0, r.jsx)(h.g, {
                                        marginTop: "8px",
                                        children: (0, r.jsx)(N, {
                                            endMoment: null === Le || void 0 === Le ? void 0 : Le.format()
                                        })
                                    }) : null]
                                }), nn]
                            })
                        })
                    })
                },
                ue = (0, c.ZP)(h.g).withConfig({
                    componentId: "sc-121bcc87-0"
                })(te(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    var n = e.theme;
                    return (0, ie.Um)({
                        variants: {
                            light: {
                                "background-color": n.colors.white
                            },
                            dark: {
                                "background-color": n.colors.onyx
                            }
                        }
                    })
                }), (function(e) {
                    return e.theme.colors.text.heading
                })),
                ce = c.ZP.div.withConfig({
                    componentId: "sc-121bcc87-1"
                })(oe(), (function(e) {
                    return e.theme.colors.panel
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.white
                }), (0, j.FD)({
                    tabletL: (0, c.iv)(se())
                }))
        },
        31893: function(e, n, a) {
            a.d(n, {
                O: function() {
                    return s
                }
            });
            var i = a(19989),
                l = a(47892),
                r = a(53585);

            function t() {
                var e = (0, i.Z)(["\n  display: inline-flex;\n"]);
                return t = function() {
                    return e
                }, e
            }
            var s = (0, l.ZP)(r.g).withConfig({
                componentId: "sc-40f22686-0"
            })(t())
        },
        88486: function(e, n, a) {
            a.r(n);
            var i = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetId"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "bundle"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isBundle"
                    },
                    l = {
                        kind: "Literal",
                        name: "first",
                        value: 20
                    },
                    r = {
                        kind: "Literal",
                        name: "isValid",
                        value: !0
                    },
                    t = {
                        kind: "Literal",
                        name: "maker",
                        value: {}
                    },
                    s = {
                        kind: "Literal",
                        name: "sortAscending",
                        value: !0
                    },
                    o = {
                        kind: "Literal",
                        name: "sortBy",
                        value: "TAKER_ASSETS_USD_PRICE"
                    },
                    d = {
                        kind: "Literal",
                        name: "takerAssetIsPayment",
                        value: !0
                    },
                    u = [l, {
                        kind: "Literal",
                        name: "isExpired",
                        value: !1
                    }, r, t, {
                        kind: "Variable",
                        name: "makerArchetype",
                        variableName: "archetype"
                    }, s, o, d],
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isFulfillable",
                        storageKey: null
                    },
                    p = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "closedAt",
                        storageKey: null
                    },
                    g = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    y = {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "taker",
                        plural: !1,
                        selections: [g],
                        storageKey: null
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayImageUrl",
                        storageKey: null
                    },
                    v = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usdSpotPrice",
                        storageKey: null
                    },
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    x = {
                        alias: null,
                        args: null,
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "payment",
                        plural: !1,
                        selections: [c, h, {
                            alias: null,
                            args: null,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "asset",
                            plural: !1,
                            selections: [c],
                            storageKey: null
                        }, {
                            kind: "InlineDataFragmentSpread",
                            name: "utils_PaymentAssetOption",
                            selections: [c, h, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [c, f, v, k],
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }],
                        storageKey: null
                    },
                    T = {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "priceType",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "unit",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "itemQuantityType",
                        storageKey: null
                    },
                    F = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "PriceDropModal_collection"
                        }],
                        storageKey: null
                    }],
                    S = [{
                        kind: "Variable",
                        name: "asset",
                        variableName: "assetId"
                    }],
                    j = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chain",
                        storageKey: null
                    },
                    A = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    w = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    K = {
                        alias: null,
                        args: null,
                        concreteType: "AbleToType",
                        kind: "LinkedField",
                        name: "isEditable",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    L = {
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "identity",
                            value: {}
                        }],
                        kind: "ScalarField",
                        name: "ownedQuantity",
                        storageKey: "ownedQuantity(identity:{})"
                    },
                    C = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCurrentlyFungible",
                        storageKey: null
                    },
                    I = [l, r, t, {
                        kind: "Variable",
                        name: "makerAssetBundle",
                        variableName: "bundle"
                    }, s, o, d],
                    P = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    O = {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "taker",
                        plural: !1,
                        selections: [g, P],
                        storageKey: null
                    },
                    _ = {
                        alias: null,
                        args: null,
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "payment",
                        plural: !1,
                        selections: [c, h, {
                            alias: null,
                            args: null,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "asset",
                            plural: !1,
                            selections: [c, P, f, v, k],
                            storageKey: null
                        }, P],
                        storageKey: null
                    },
                    N = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    D = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionStatsV2Type",
                            kind: "LinkedField",
                            name: "statsV2",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "usd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, P],
                        storageKey: null
                    }],
                    B = {
                        kind: "InlineFragment",
                        selections: [P],
                        type: "Node",
                        abstractKey: "__isNode"
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, a, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "OrderManagerQuery",
                        selections: [{
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: u,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [c, m, p, y, x, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [c, {
                                                kind: "InlineFragment",
                                                selections: F,
                                                type: "AssetType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: S,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    kind: "InlineDataFragmentSpread",
                                    name: "asset_edit_url",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "assetContract",
                                        plural: !1,
                                        selections: [g, j],
                                        storageKey: null
                                    }, A, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionType",
                                        kind: "LinkedField",
                                        name: "collection",
                                        plural: !1,
                                        selections: [w],
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }, K, c, L, C],
                                storageKey: null
                            }]
                        }, {
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "bundleOrders",
                                args: I,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [c, m, p, y, x, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [c, {
                                                kind: "InlineFragment",
                                                selections: F,
                                                type: "AssetBundleType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, a, i],
                        kind: "Operation",
                        name: "OrderManagerQuery",
                        selections: [{
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: u,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [c, m, p, O, _, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [N, c, {
                                                kind: "InlineFragment",
                                                selections: D,
                                                type: "AssetType",
                                                abstractKey: null
                                            }, B],
                                            storageKey: null
                                        }, P],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: S,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [g, j, P],
                                    storageKey: null
                                }, A, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "collection",
                                    plural: !1,
                                    selections: [w, P],
                                    storageKey: null
                                }, K, c, L, C, P],
                                storageKey: null
                            }]
                        }, {
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "bundleOrders",
                                args: I,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [c, m, p, O, _, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [N, c, {
                                                kind: "InlineFragment",
                                                selections: D,
                                                type: "AssetBundleType",
                                                abstractKey: null
                                            }, B],
                                            storageKey: null
                                        }, P],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }]
                        }]
                    },
                    params: {
                        cacheID: "6022dc1563640bb1da74b08368b532e0",
                        id: null,
                        metadata: {},
                        name: "OrderManagerQuery",
                        operationKind: "query",
                        text: "query OrderManagerQuery(\n  $assetId: AssetRelayID!\n  $archetype: ArchetypeInputType!\n  $bundle: BundleSlug\n  $isBundle: Boolean!\n) {\n  orders(first: 20, isValid: true, isExpired: false, maker: {}, makerArchetype: $archetype, sortAscending: true, sortBy: TAKER_ASSETS_USD_PRICE, takerAssetIsPayment: true) @skip(if: $isBundle) {\n    edges {\n      node {\n        relayId\n        isFulfillable\n        closedAt\n        taker {\n          address\n          id\n        }\n        payment {\n          relayId\n          symbol\n          asset {\n            relayId\n            id\n          }\n          ...utils_PaymentAssetOption\n          id\n        }\n        priceType {\n          unit\n        }\n        itemQuantityType\n        item {\n          __typename\n          relayId\n          ... on AssetType {\n            collection {\n              ...PriceDropModal_collection\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  asset(asset: $assetId) @skip(if: $isBundle) {\n    ...asset_edit_url\n    isEditable {\n      value\n    }\n    relayId\n    ownedQuantity(identity: {})\n    isCurrentlyFungible\n    id\n  }\n  bundleOrders: orders(first: 20, isValid: true, maker: {}, makerAssetBundle: $bundle, sortAscending: true, sortBy: TAKER_ASSETS_USD_PRICE, takerAssetIsPayment: true) @include(if: $isBundle) {\n    edges {\n      node {\n        relayId\n        isFulfillable\n        closedAt\n        taker {\n          address\n          id\n        }\n        payment {\n          relayId\n          symbol\n          asset {\n            relayId\n            id\n          }\n          ...utils_PaymentAssetOption\n          id\n        }\n        priceType {\n          unit\n        }\n        itemQuantityType\n        item {\n          __typename\n          relayId\n          ... on AssetBundleType {\n            collection {\n              ...PriceDropModal_collection\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PriceDropModal_collection on CollectionType {\n  statsV2 {\n    floorPrice {\n      usd\n    }\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment utils_PaymentAssetOption on PaymentAssetType {\n  relayId\n  symbol\n  asset {\n    relayId\n    displayImageUrl\n    usdSpotPrice\n    decimals\n    id\n  }\n}\n"
                    }
                }
            }();
            i.hash = "6831447abaf4554087abd80fb6e918f7", n.default = i
        },
        18193: function(e, n, a) {
            a.r(n);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PriceDropModal_collection",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionStatsV2Type",
                    kind: "LinkedField",
                    name: "statsV2",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "floorPrice",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "usd",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "7a2066d3b1b66377527c2df52ae12293"
            };
            n.default = i
        },
        46371: function(e, n, a) {
            a.r(n);
            var i = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "bundle"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includePrivate"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    }, {
                        kind: "Variable",
                        name: "bundle",
                        variableName: "bundle"
                    }, {
                        kind: "Variable",
                        name: "includePrivate",
                        variableName: "includePrivate"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    i = {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: [a],
                        args: null,
                        argumentDefinitions: []
                    },
                    l = {
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
                        name: "PrivateListingBannerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "TradeSummaryType",
                            kind: "LinkedField",
                            name: "tradeSummary",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2Type",
                                kind: "LinkedField",
                                name: "bestAsk",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "taker",
                                    plural: !1,
                                    selections: [a, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "AccountLink_data"
                                    }, i],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "maker",
                                    plural: !1,
                                    selections: [i],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "PrivateListingBannerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "TradeSummaryType",
                            kind: "LinkedField",
                            name: "tradeSummary",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2Type",
                                kind: "LinkedField",
                                name: "bestAsk",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "taker",
                                    plural: !1,
                                    selections: [a, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "config",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCompromised",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserType",
                                        kind: "LinkedField",
                                        name: "user",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "publicUsername",
                                            storageKey: null
                                        }, l],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "displayName",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "imageUrl",
                                        storageKey: null
                                    }, l],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "maker",
                                    plural: !1,
                                    selections: [a, l],
                                    storageKey: null
                                }, l],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ff9822eb1a6c29ec9870c92aabbb6b0a",
                        id: null,
                        metadata: {},
                        name: "PrivateListingBannerQuery",
                        operationKind: "query",
                        text: "query PrivateListingBannerQuery(\n  $archetype: ArchetypeInputType\n  $bundle: BundleSlug\n  $includePrivate: Boolean!\n) {\n  tradeSummary(archetype: $archetype, bundle: $bundle, includePrivate: $includePrivate) {\n    bestAsk {\n      taker {\n        address\n        ...AccountLink_data\n        ...wallet_accountKey\n        id\n      }\n      maker {\n        ...wallet_accountKey\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            i.hash = "1139f6ff714062491de86b6540a67eba", n.default = i
        },
        48453: function(e, n, a) {
            a.r(n);
            var i = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "chain"
                }],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_archetype",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verificationStatus",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AssetContractType",
                    kind: "LinkedField",
                    name: "assetContract",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chain",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 1
                    }],
                    concreteType: "AssetOwnershipTypeConnection",
                    kind: "LinkedField",
                    name: "assetOwners",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetOwnershipTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetOwnershipType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "owner",
                                plural: !1,
                                selections: [{
                                    kind: "InlineDataFragmentSpread",
                                    name: "wallet_accountKey",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "address",
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "assetOwners(first:1)"
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isListable",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AbleToType",
                    kind: "LinkedField",
                    name: "isBiddingEnabled",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reason",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    args: [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }],
                    kind: "FragmentSpread",
                    name: "OfferModal_asset"
                }],
                type: "AssetType",
                abstractKey: null,
                hash: "06eaa43cc29ea5edf7be20862ac02883"
            };
            n.default = i
        },
        18696: function(e, n, a) {
            a.r(n);
            var i = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "chain"
                }],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_bundle",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    args: [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }],
                    kind: "FragmentSpread",
                    name: "OfferModal_assetBundle"
                }],
                type: "AssetBundleType",
                abstractKey: null,
                hash: "cd8a363a61763884cfc8e717951c06d1"
            };
            n.default = i
        },
        43825: function(e, n, a) {
            a.r(n);
            var i = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    n = [e],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    l = [i],
                    r = {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: l,
                        args: null,
                        argumentDefinitions: []
                    },
                    t = {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "chain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "identifier",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    s = {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "tokenId",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "AssetContractType",
                            kind: "LinkedField",
                            name: "assetContract",
                            plural: !1,
                            selections: l,
                            storageKey: null
                        }],
                        type: "AssetType",
                        abstractKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usd",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "perUnitPriceType",
                        plural: !1,
                        selections: [o],
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    c = [a],
                    m = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OrderPrice"
                    },
                    p = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OrderUsdPrice"
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "TradeStation_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "OrderV2Type",
                        kind: "LinkedField",
                        name: "bestAsk",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "closedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "dutchAuctionFinalPriceType",
                            plural: !1,
                            selections: n,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "openedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "orderType",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "priceFnEndedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "englishAuctionReservePriceType",
                            plural: !1,
                            selections: n,
                            storageKey: null
                        }, a, {
                            alias: null,
                            args: null,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "maker",
                            plural: !1,
                            selections: [i, r],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "item",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__typename",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "verificationStatus",
                                storageKey: null
                            }, a, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "slug",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, t, s, {
                                kind: "InlineDataFragmentSpread",
                                name: "itemEvents_dataV2",
                                selections: [a, t, s],
                                args: null,
                                argumentDefinitions: []
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "priceType",
                            plural: !1,
                            selections: [e, o],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "remainingQuantityType",
                            storageKey: null
                        }, d, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "payment",
                            plural: !1,
                            selections: [u, a, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: c,
                                storageKey: null
                            }, {
                                kind: "InlineDataFragmentSpread",
                                name: "TokenPricePayment",
                                selections: [u, t, {
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
                                        name: "imageUrl",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "assetContract",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "blockExplorerLink",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                args: null,
                                argumentDefinitions: []
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "taker",
                            plural: !1,
                            selections: [r],
                            storageKey: null
                        }, m, p],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "OrderV2Type",
                        kind: "LinkedField",
                        name: "bestBid",
                        plural: !1,
                        selections: [m, p, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "payment",
                            plural: !1,
                            selections: c,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "priceType",
                            plural: !1,
                            selections: n,
                            storageKey: null
                        }, d],
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OfferModal_tradeSummary"
                    }],
                    type: "TradeSummaryType",
                    abstractKey: null
                }
            }();
            i.hash = "52a24cd3dcc46a0a4c40c3fbcdd5e579", n.default = i
        },
        74201: function(e, n, a) {
            a.r(n);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_tradeLimits",
                selections: [{
                    args: null,
                    kind: "FragmentSpread",
                    name: "OfferModal_tradeLimits"
                }],
                type: "TradeLimitsType",
                abstractKey: null,
                hash: "a072a10b21724b2fad55d6b61b3465ef"
            };
            n.default = i
        },
        76159: function(e, n, a) {
            a.d(n, {
                n: function() {
                    return d
                }
            });
            var i = a(71636),
                l = a.n(i),
                r = a(70884),
                t = a(26851),
                s = a(97516),
                o = a(79570),
                d = function(e, n) {
                    (0, o.$l)({
                        delay: r.g_,
                        fn: function() {
                            var a = (0, s.pY)(e),
                                i = l().duration(a.diff(l()())).asMinutes();
                            i > -1 && i < r.l9 && ((0, t.LK)(), n())
                        }
                    })
                }
        }
    }
]);
//# sourceMappingURL=14516-1210cbac6368c4c4.js.map