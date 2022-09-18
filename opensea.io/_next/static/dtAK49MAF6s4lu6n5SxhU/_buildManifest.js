self.__BUILD_MANIFEST = function(c, s, t, a, e, n, i, l, o, u, d, r, k, b, h, g, f, j, p, S, y, I, m, v, _, C, x, A, w, L, z, N, T, U, B, F, W, D, E, M, P, q, G, H, J) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/favicon.ico",
                destination: W
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/apple-touch-icon-precomposed.png",
                destination: W
            }],
            afterFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/assets/:collectionSlug",
                destination: "/:nextInternalLocale/assets"
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/activity/:collectionSlug",
                destination: "/:nextInternalLocale/activity"
            }],
            fallback: []
        },
        "/": [c, x, N, e, A, w, T, D, E, "static/chunks/pages/index-9609a5a1484d304d.js"],
        "/_app.spec": ["static/chunks/07e27881-74e665feeb70ee10.js", "static/chunks/24578-ac1a96bd195ef618.js", "static/chunks/pages/_app.spec-131f11bedec902f3.js"],
        "/_error": ["static/chunks/pages/_error-4ded009e5aa305ec.js"],
        "/about": ["static/chunks/pages/about-3278c74919a7e707.js"],
        "/account": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, "static/chunks/pages/account-4eccf3b20d79e631.js"],
        "/account/settings": [c, g, L, "static/chunks/pages/account/settings-848747ad62a17815.js"],
        "/account/verify-email": ["static/chunks/pages/account/verify-email-d667fc3155d4ee4a.js"],
        "/account/[collectionSlug]": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, "static/chunks/pages/account/[collectionSlug]-b5c11301ebd658fa.js"],
        "/activity": [l, s, c, o, b, h, "static/chunks/97165-0b78a55e36b6cb95.js", t, i, u, k, j, I, "static/chunks/pages/activity-ecef3f5e41508bcd.js"],
        "/asset/create": [s, U, M, "static/chunks/pages/asset/create-4dfd71b10fd27dc5.js"],
        "/assets": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, "static/chunks/pages/assets-3822ec47cefb8771.js"],
        "/assets/solana/[mint]": [l, s, c, a, o, b, h, g, t, n, i, u, d, r, k, j, p, y, m, C, L, B, P, "static/chunks/pages/assets/solana/[mint]-552ac724c289a9bb.js"],
        "/assets/solana/[mint]/sell": [n, d, C, q, "static/chunks/pages/assets/solana/[mint]/sell-f3ede724adf58301.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]": [l, s, c, a, o, b, h, g, t, n, i, u, d, r, k, j, p, y, m, C, L, B, P, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]-703b0a2729fcedd6.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/sell": [n, d, C, q, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/sell-0853ea94f03bb112.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer": [p, G, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/transfer-9734519584d04067.js"],
        "/bulk-list": [c, "static/chunks/pages/bulk-list-32386a5b132059ad.js"],
        "/bundle/[chain]/sell": [n, d, C, "static/chunks/pages/bundle/[chain]/sell-b2f9bd3dadc16850.js"],
        "/bundle/[chain]/transfer": [p, G, "static/chunks/pages/bundle/[chain]/transfer-8a0d637046f36080.js"],
        "/bundles/[chain]/[slug]": [s, c, a, g, t, n, i, u, d, r, y, C, L, B, "static/chunks/pages/bundles/[chain]/[slug]-95c9ad5bf1c59d0d.js"],
        "/callback/bitski": ["static/chunks/pages/callback/bitski-0891523bb64db4a2.js"],
        "/careers": [w, "static/chunks/pages/careers-852abcac597123eb.js"],
        "/category/[categorySlug]": [c, a, f, F, "static/chunks/pages/category/[categorySlug]-26b3f2c767790261.js"],
        "/collection/create": [s, t, H, "static/chunks/pages/collection/create-8261f0606ad37fb7.js"],
        "/collection/[collectionSlug]": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, z, "static/chunks/pages/collection/[collectionSlug]-0d39bf84555f4e2c.js"],
        "/collection/[collectionSlug]/activity": [l, s, c, a, o, b, h, "static/chunks/59292-aeac37ca3e4438ef.js", t, e, i, u, k, f, j, S, I, z, "static/chunks/pages/collection/[collectionSlug]/activity-f10d9dbd38f6bff0.js"],
        "/collection/[collectionSlug]/analytics": [l, s, a, o, t, e, n, r, k, f, S, z, J, "static/chunks/pages/collection/[collectionSlug]/analytics-55d5fe1b749220a6.js"],
        "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit": [s, U, "static/chunks/pages/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit-389a6bc2da2abf52.js"],
        "/collection/[collectionSlug]/assets/create": [s, U, M, "static/chunks/pages/collection/[collectionSlug]/assets/create-244700307497cc87.js"],
        "/collection/[collectionSlug]/drop": ["static/chunks/92a4436f-9a49dd38a57d7c07.js", s, a, N, "static/css/1905a78644faed02.css", "static/chunks/45014-8d5c03ea9c4b268f.js", t, "static/chunks/pages/collection/[collectionSlug]/drop-31aeff7eba0f6d29.js"],
        "/collection/[collectionSlug]/edit": [s, t, H, "static/chunks/pages/collection/[collectionSlug]/edit-bcc3519ffe8c2146.js"],
        "/collection/[collectionSlug]/mint": [T, "static/chunks/pages/collection/[collectionSlug]/mint-60a64176f545902c.js"],
        "/collection/[collectionSlug]/orderbook": [l, s, a, o, t, e, n, i, r, f, S, z, J, "static/chunks/pages/collection/[collectionSlug]/orderbook-d66ad9c9d5674886.js"],
        "/collection/[collectionSlug]/payouts": [s, c, "static/chunks/54951-96b3fb90cfd1d113.js", t, i, u, "static/chunks/pages/collection/[collectionSlug]/payouts-27b1c50ce0f798e3.js"],
        "/collections": ["static/chunks/pages/collections-bf74d187fbd093c6.js"],
        "/connected-socials/account-instagram-callback": ["static/chunks/pages/connected-socials/account-instagram-callback-3b73662922aea779.js"],
        "/connected-socials/account-twitter-callback": ["static/chunks/pages/connected-socials/account-twitter-callback-adbe4bb379b88047.js"],
        "/connected-socials/collection-instagram-callback": ["static/chunks/pages/connected-socials/collection-instagram-callback-7d789f224de89890.js"],
        "/connected-socials/twitter-callback": ["static/chunks/pages/connected-socials/twitter-callback-e28257711cdbd24f.js"],
        "/explore-collections": [c, F, "static/chunks/pages/explore-collections-aae166394b7886c5.js"],
        "/explore-solana": [c, x, N, e, A, w, T, D, E, "static/chunks/pages/explore-solana-6aef4d106a41f269.js"],
        "/internal/footer": ["static/chunks/pages/internal/footer-b4276eb3084250f7.js"],
        "/login": ["static/chunks/pages/login-7cf7388c96c64f32.js"],
        "/opensea-grants": ["static/chunks/pages/opensea-grants-0c359e6699fca879.js"],
        "/opensea-ventures": ["static/chunks/pages/opensea-ventures-f3b6b2de98d0751f.js"],
        "/partners": [w, "static/chunks/pages/partners-67defe81381339fc.js"],
        "/privacy": ["static/chunks/pages/privacy-e5dab052a99264df.js"],
        "/rankings": [c, x, e, A, "static/chunks/pages/rankings-c25848fc0aa98237.js"],
        "/rankings/trending": [c, x, e, A, "static/chunks/pages/rankings/trending-a0a4c5c9c8830d23.js"],
        "/rankings/watchlist": [c, x, e, A, "static/chunks/pages/rankings/watchlist-b3be957469ba6c4d.js"],
        "/solana-collections": [c, a, F, "static/chunks/pages/solana-collections-be4f6d8ba6d5b595.js"],
        "/tax-resources": ["static/chunks/pages/tax-resources-de51d7a787f9046a.js"],
        "/tos": ["static/chunks/pages/tos-4d4fe7176ce62480.js"],
        "/[identifier]": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, "static/chunks/pages/[identifier]-4365a96d9087eba8.js"],
        "/[identifier]/[collectionSlug]": [l, s, c, a, o, b, h, g, v, t, e, n, i, u, d, r, k, f, j, S, p, y, I, m, _, "static/chunks/pages/[identifier]/[collectionSlug]-572035d0043ac3d1.js"],
        sortedPages: ["/", "/_app", "/_app.spec", "/_error", "/about", "/account", "/account/settings", "/account/verify-email", "/account/[collectionSlug]", "/activity", "/asset/create", "/assets", "/assets/solana/[mint]", "/assets/solana/[mint]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]", "/assets/[chain]/[assetContractAddress]/[tokenId]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer", "/bulk-list", "/bundle/[chain]/sell", "/bundle/[chain]/transfer", "/bundles/[chain]/[slug]", "/callback/bitski", "/careers", "/category/[categorySlug]", "/collection/create", "/collection/[collectionSlug]", "/collection/[collectionSlug]/activity", "/collection/[collectionSlug]/analytics", "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit", "/collection/[collectionSlug]/assets/create", "/collection/[collectionSlug]/drop", "/collection/[collectionSlug]/edit", "/collection/[collectionSlug]/mint", "/collection/[collectionSlug]/orderbook", "/collection/[collectionSlug]/payouts", "/collections", "/connected-socials/account-instagram-callback", "/connected-socials/account-twitter-callback", "/connected-socials/collection-instagram-callback", "/connected-socials/twitter-callback", "/explore-collections", "/explore-solana", "/internal/footer", "/login", "/opensea-grants", "/opensea-ventures", "/partners", "/privacy", "/rankings", "/rankings/trending", "/rankings/watchlist", "/solana-collections", "/tax-resources", "/tos", "/[identifier]", "/[identifier]/[collectionSlug]"]
    }
}("static/chunks/50114-0f185a0fb1c27a9b.js", "static/chunks/44833-acf7cabbb1b71bc7.js", "static/chunks/25459-01332bec6395796a.js", "static/chunks/28263-ef811ba12172856a.js", "static/chunks/5371-004a31a02865e70f.js", "static/chunks/46951-c2b026c0ac6b61a8.js", "static/chunks/60354-7f2eb169dde321c1.js", "static/chunks/3143e8a8-80a1c40993de99bc.js", "static/chunks/66391-8a391964d39253fd.js", "static/chunks/4459-e51e339c0a6ff8e3.js", "static/chunks/13056-267b08794a29ea4f.js", "static/chunks/11424-cccb783052f63bd2.js", "static/chunks/39653-aa1ca629fd6d3aa3.js", "static/chunks/19969-c87987ca53c9dced.js", "static/chunks/71736-20e1e884a57ef378.js", "static/chunks/31523-04adc35722122dc2.js", "static/chunks/57063-289ed2036a858e8b.js", "static/chunks/16466-b3142e61d4d2d25a.js", "static/chunks/45890-221eedef3e98627f.js", "static/chunks/96521-4a9aa53e9d1687dd.js", "static/chunks/88515-297d5587dd85861d.js", "static/chunks/90186-1d492c19e0432b49.js", "static/chunks/5001-43c23111c4905d26.js", "static/chunks/57334-9b4f21f48746fcff.js", "static/chunks/80585-46b7179b06a9b6ec.js", "static/chunks/70343-02be2ddf478f325a.js", "static/chunks/19600-15a83b7e520157ed.js", "static/chunks/13465-0471afa7f675f6c9.js", "static/chunks/30372-5d36f033d0912de9.js", "static/chunks/90416-abc70c1102654851.js", "static/chunks/99807-7bfdd2f276dc78c0.js", "static/chunks/85530-f0c7224cac3d2322.js", "static/chunks/7428-d3238bfabed6f7a8.js", "static/chunks/11224-c0c6125c52b9bee0.js", "static/chunks/14516-1210cbac6368c4c4.js", "static/chunks/46422-54db5151e1532015.js", "/:nextInternalLocale/static/images/favicon/favicon.ico", "static/chunks/47623-48a1c30d77fb8027.js", "static/css/9e0b79f72d163b3c.css", "static/chunks/32919-11b3075d24706f1c.js", "static/chunks/20924-7b8222a2e7a8ee2c.js", "static/chunks/4234-bd19d0d54cd77407.js", "static/chunks/23864-a61741ec2431cc50.js", "static/chunks/68223-5490debab5b02678.js", "static/chunks/49925-16e8ad39a3e76d39.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();