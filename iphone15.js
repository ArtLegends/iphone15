function determineLocation() {
    const userLang = (navigator.language || navigator.userLanguage).substring(0,2);
    return translations[userLang] ? userLang : 'en';
}

var translations = {
    "de": {
        "meta": {
            "description": "Entdecken Sie das iPhone 15 Pro Max - Ihr ultimatives Smartphone-Erlebnis. Perfekte Leistung, bahnbrechende Kamera und innovative Technologie.",
            "keywords": "iPhone 15 Pro Max, Smartphone, Neu, iOS 15, Kamera, Leistung, Innovation, Max-Modell, Technologie, OLED-Bildschirm, Schnellladung, Face ID, 5G-Unterstützung, Großer Bildschirm, Maximale Leistung, Apple, Touchscreen, Fotografie, Videografie, Mobiles Gerät",
            "title": "iPhone 15 Pro Max vorbestellen"
        },
        "content": {
            "h1": "iPhone 15 Pro Max",
            "h3_preorder": "Bestellen Sie das neue iPhone 15 Pro Max vor und erhalten Sie es am 22. September.",
            "p_description": "Das iPhone 15 Pro Max ist der nächste Schritt in der Welt der Smartphones. Mit einem leistungsstarken Prozessor, verbesserter Kamera und wunderschönem OLED-Display bietet es Ihnen das beste Smartphone-Erlebnis. Entdecken Sie die Möglichkeiten moderner Technologie mit dem iPhone 15 Pro Max.",
            "button_order": "Jetzt bestellen"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (85).jpg": "iPhone 15 Pro Max",
            "photo_2023-08-06_15-42-25 (88).jpg": "iPhone 15 Pro Max"
        },
        "specifications": {
            "Display": {
                "Größe": "6,7 Zoll",
                "Auflösung": "1290 x 2796 Pixel",
                "Typ": "LTPO Super Retina XDR OLED, 120Hz",
                "Schutz": "Ceramic Shield Glas"
            },
            "Plattform": {
                "Betriebssystem": "iOS 17",
                "Chipsatz": "Apple A17 Pro (3nm)",
                "CPU": "Hexa-Core (2x + 4x)",
                "GPU": "Apple GPU (6-Kern-Grafik)"
            },
            "Speicher": {
                "Kartenslot": "Nein",
                "Intern": "256GB, 512GB, 1TB"
            },
            "Hauptkamera": {
                "Triple": "48 MP, f/1.8, 24mm (weit), 1/1.28\", 1.22µm, Dual-Pixel-PDAF, Sensor-Shift-OIS...",
                "Features": "Dual-LED Dual-Tone Blitz, HDR (Foto/Panorama)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-Bit HDR, ..."
            },
            "Selfie-Kamera": {
                "Single": "12 MP, f/1.9, 23mm (weit), 1/3.6\", PDAF, OIS...",
                "Features": "HDR, Cinematic-Modus (4K@24/30fps)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120fps, Gyro-EIS"
            },
            "Kommunikation": {
                "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6e, Dual-Band, Hotspot",
                "Bluetooth": "5.3, A2DP, LE",
                "Positionierung": "GPS (L1+L5), GLONASS, GALILEO, BDS, QZSS, NavIC",
                "NFC": "Ja",
                "USB": "USB Typ-C 3.0, DisplayPort"
            }
        },
        "promo_content": {
            "h3_1": "Warum iPhone 15 Pro Max?",
            "p1": "Das iPhone 15 Pro Max ist das neueste Flaggschiff-Smartphone von Apple und bietet modernste Technologie und ein beeindruckendes Design. Mit seiner leistungsstarken Performance, dem fortschrittlichen Kamerasystem und der intuitiven Benutzererfahrung ist es das ultimative Smartphone für Technikbegeisterte. Erheben Sie Ihr mobiles Erlebnis mit dem iPhone 15 Pro Max.",
            "h3_2": "Warum bei TechMarket bestellen?",
            "p2": "Bei TechMarket stellen wir sicher, dass Sie zu den Ersten gehören, die die neuesten Geräte in den Händen halten. Genießen Sie exklusive Vorbestellvorteile, unübertroffenen Kundenservice und ein nahtloses Einkaufserlebnis. Außerdem erhalten Sie spezielle Rabatte und Angebote, die Sie nirgendwo anders finden werden!",
            "button_order": "Jetzt bestellen"
        }
    },
    "en": {
        "meta": {
            "description": "Discover the iPhone 15 Pro Max - Your ultimate smartphone experience. Perfect performance, groundbreaking camera, and innovative technology.",
            "keywords": "iPhone 15 Pro Max, Smartphone, New, iOS 15, Camera, Performance, Innovation, Max Model, Technology, OLED Screen, Fast Charging, Face ID, 5G Support, Large Screen, Maximum Performance, Apple, Touchscreen, Photography, Videography, Mobile Device",
            "title": "Pre-order iPhone 15 Pro Max"
        },
        "content": {
            "h1": "iPhone 15 Pro Max",
            "h3_preorder": "Pre-order the new iPhone 15 Pro Max and receive it on September 22.",
            "p_description": "The iPhone 15 Pro Max is the next step in the world of smartphones. With a powerful processor, improved camera, and beautiful OLED display, it offers you the best smartphone experience. Discover the possibilities of modern technology with the iPhone 15 Pro Max.",
            "button_order": "Order now"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (85).jpg": "iPhone 15 Pro Max",
            "photo_2023-08-06_15-42-25 (88).jpg": "iPhone 15 Pro Max"
        },
        "specifications": {
            "Display": {
                "Size": "6.7 inches",
                "Resolution": "1290 x 2796 pixels",
                "Type": "LTPO Super Retina XDR OLED, 120Hz",
                "Protection": "Ceramic Shield Glass"
            },
            "Platform": {
                "Operating System": "iOS 17",
                "Chipset": "Apple A17 Pro (3nm)",
                "CPU": "Hexa-Core (2x + 4x)",
                "GPU": "Apple GPU (6-core graphics)"
            },
            "Memory": {
                "Card Slot": "No",
                "Internal": "256GB, 512GB, 1TB"
            },
            "Main Camera": {
                "Triple": "48 MP, f/1.8, 24mm (wide), 1/1.28\", 1.22µm, dual pixel PDAF, sensor-shift OIS...",
                "Features": "Dual-LED dual-tone flash, HDR (photo/panorama)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, ..."
            },
            "Selfie Camera": {
                "Single": "12 MP, f/1.9, 23mm (wide), 1/3.6\", PDAF, OIS...",
                "Features": "HDR, Cinematic mode (4K@24/30fps)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS"
            },
            "Communication": {
                "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6e, Dual-Band, Hotspot",
                "Bluetooth": "5.3, A2DP, LE",
                "Positioning": "GPS (L1+L5), GLONASS, GALILEO, BDS, QZSS, NavIC",
                "NFC": "Yes",
                "USB": "USB Type-C 3.0, DisplayPort"
            }
        },
        "promo_content": {
            "h3_1": "Why iPhone 15 Pro Max?",
            "p1": "The iPhone 15 Pro Max is Apple's latest flagship smartphone, offering cutting-edge technology and an impressive design. With its powerful performance, advanced camera system, and intuitive user experience, it's the ultimate smartphone for tech enthusiasts. Elevate your mobile experience with the iPhone 15 Pro Max.",
            "h3_2": "Why order from TechMarket?",
            "p2": "At TechMarket, we ensure you're among the first to get your hands on the latest devices. Enjoy exclusive pre-order benefits, unmatched customer service, and a seamless shopping experience. Plus, you'll find special discounts and offers you won't find anywhere else!",
            "button_order": "Order now"
        }
    },
    "fr": {
        "meta": {
            "description": "Découvrez l'iPhone 15 Pro Max - Votre expérience smartphone ultime. Performance parfaite, appareil photo révolutionnaire et technologie innovante.",
            "keywords": "iPhone 15 Pro Max, Smartphone, Nouveau, iOS 15, Appareil photo, Performance, Innovation, Modèle Max, Technologie, Écran OLED, Charge rapide, Face ID, Support 5G, Grand écran, Performance maximale, Apple, Écran tactile, Photographie, Vidéographie, Appareil mobile",
            "title": "Précommandez l'iPhone 15 Pro Max"
        },
        "content": {
            "h1": "iPhone 15 Pro Max",
            "h3_preorder": "Précommandez le nouvel iPhone 15 Pro Max et recevez-le le 22 septembre.",
            "p_description": "L'iPhone 15 Pro Max est la prochaine étape dans le monde des smartphones. Avec un processeur puissant, une caméra améliorée et un magnifique écran OLED, il vous offre la meilleure expérience smartphone. Découvrez les possibilités de la technologie moderne avec l'iPhone 15 Pro Max.",
            "button_order": "Commander maintenant"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (85).jpg": "iPhone 15 Pro Max",
            "photo_2023-08-06_15-42-25 (88).jpg": "iPhone 15 Pro Max"
        },
        "specifications": {
            "Affichage": {
                "Taille": "6,7 pouces",
                "Résolution": "1290 x 2796 pixels",
                "Type": "LTPO Super Retina XDR OLED, 120Hz",
                "Protection": "Verre Ceramic Shield"
            },
            "Plateforme": {
                "Système d'exploitation": "iOS 17",
                "Jeu de puces": "Apple A17 Pro (3nm)",
                "CPU": "Hexa-Core (2x + 4x)",
                "GPU": "GPU Apple (graphique 6 cœurs)"
            },
            "Mémoire": {
                "Emplacement pour carte": "Non",
                "Interne": "256Go, 512Go, 1To"
            },
            "Caméra principale": {
                "Triple": "48 MP, f/1.8, 24mm (large), 1/1.28\", 1.22µm, PDAF à double pixel, stabilisation optique par déplacement du capteur...",
                "Fonctionnalités": "Flash double LED bicolore, HDR (photo/panorama)",
                "Vidéo": "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR 10 bits, ..."
            },
            "Caméra Selfie": {
                "Unique": "12 MP, f/1.9, 23mm (large), 1/3.6\", PDAF, OIS...",
                "Fonctionnalités": "HDR, Mode cinématique (4K@24/30fps)",
                "Vidéo": "4K@24/25/30/60fps, 1080p@25/30/60/120fps, stabilisation gyroscopique"
            },
            "Communication": {
                "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6e, Double bande, Hotspot",
                "Bluetooth": "5.3, A2DP, LE",
                "Positionnement": "GPS (L1+L5), GLONASS, GALILEO, BDS, QZSS, NavIC",
                "NFC": "Oui",
                "USB": "USB Type-C 3.0, DisplayPort"
            }
        },
        "promo_content": {
            "h3_1": "Pourquoi l'iPhone 15 Pro Max?",
            "p1": "L'iPhone 15 Pro Max est le dernier smartphone phare d'Apple, offrant une technologie de pointe et un design impressionnant. Avec sa performance puissante, son système de caméra avancé et son expérience utilisateur intuitive, c'est le smartphone ultime pour les passionnés de technologie. Élevez votre expérience mobile avec l'iPhone 15 Pro Max.",
            "h3_2": "Pourquoi commander chez TechMarket?",
            "p2": "Chez TechMarket, nous nous assurons que vous soyez parmi les premiers à mettre la main sur les derniers appareils. Profitez d'avantages exclusifs en précommande, d'un service client inégalé et d'une expérience d'achat fluide. De plus, vous trouverez des remises spéciales et des offres que vous ne trouverez nulle part ailleurs!",
            "button_order": "Commander maintenant"
        }
    },
    "es": {
        "meta": {
            "description": "Descubre el iPhone 15 Pro Max: tu experiencia definitiva en smartphones. Rendimiento perfecto, cámara revolucionaria y tecnología innovadora.",
            "keywords": "iPhone 15 Pro Max, Smartphone, Nuevo, iOS 15, Cámara, Rendimiento, Innovación, Modelo Max, Tecnología, Pantalla OLED, Carga rápida, Face ID, Soporte 5G, Pantalla grande, Rendimiento máximo, Apple, Pantalla táctil, Fotografía, Videografía, Dispositivo móvil",
            "title": "Preordena el iPhone 15 Pro Max"
        },
        "content": {
            "h1": "iPhone 15 Pro Max",
            "h3_preorder": "Preordena el nuevo iPhone 15 Pro Max y recíbelo el 22 de septiembre.",
            "p_description": "El iPhone 15 Pro Max es el siguiente paso en el mundo de los smartphones. Con un potente procesador, cámara mejorada y una hermosa pantalla OLED, te ofrece la mejor experiencia en smartphones. Descubre las posibilidades de la tecnología moderna con el iPhone 15 Pro Max.",
            "button_order": "Ordenar ahora"
        },
        "images": {
            "photo_2023-08-06_15-42-25 (85).jpg": "iPhone 15 Pro Max",
            "photo_2023-08-06_15-42-25 (88).jpg": "iPhone 15 Pro Max"
        },
        "specifications": {
            "Pantalla": {
                "Tamaño": "6.7 pulgadas",
                "Resolución": "1290 x 2796 píxeles",
                "Tipo": "LTPO Super Retina XDR OLED, 120Hz",
                "Protección": "Vidrio Ceramic Shield"
            },
            "Plataforma": {
                "Sistema Operativo": "iOS 17",
                "Chipset": "Apple A17 Pro (3nm)",
                "CPU": "Hexa-Core (2x + 4x)",
                "GPU": "GPU Apple (gráficos de 6 núcleos)"
            },
            "Memoria": {
                "Ranura para tarjeta": "No",
                "Interna": "256GB, 512GB, 1TB"
            },
            "Cámara principal": {
                "Triple": "48 MP, f/1.8, 24mm (ancho), 1/1.28\", 1.22µm, PDAF de doble píxel, estabilización óptica de imagen por desplazamiento del sensor...",
                "Funciones": "Flash Dual-LED de dos tonos, HDR (foto/panorama)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR de 10 bits, ..."
            },
            "Cámara Selfie": {
                "Individual": "12 MP, f/1.9, 23mm (ancho), 1/3.6\", PDAF, OIS...",
                "Funciones": "HDR, Modo cinematográfico (4K@24/30fps)",
                "Video": "4K@24/25/30/60fps, 1080p@25/30/60/120fps, estabilización giroscópica"
            },
            "Comunicación": {
                "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6e, Banda dual, Hotspot",
                "Bluetooth": "5.3, A2DP, LE",
                "Posicionamiento": "GPS (L1+L5), GLONASS, GALILEO, BDS, QZSS, NavIC",
                "NFC": "Sí",
                "USB": "USB Tipo-C 3.0, DisplayPort"
            }
        },
        "promo_content": {
            "h3_1": "¿Por qué el iPhone 15 Pro Max?",
            "p1": "El iPhone 15 Pro Max es el último smartphone insignia de Apple, que ofrece tecnología de vanguardia y un diseño impresionante. Con su potente rendimiento, sistema de cámara avanzado y experiencia de usuario intuitiva, es el smartphone definitivo para los entusiastas de la tecnología. Eleva tu experiencia móvil con el iPhone 15 Pro Max.",
            "h3_2": "¿Por qué ordenar desde TechMarket?",
            "p2": "En TechMarket, nos aseguramos de que seas uno de los primeros en tener en tus manos los dispositivos más recientes. Disfruta de beneficios exclusivos de preventa, un servicio al cliente incomparable y una experiencia de compra sin problemas. ¡Además, encontrarás descuentos especiales y ofertas que no encontrarás en ningún otro lugar!",
            "button_order": "Ordenar ahora"
        }
    }            
};

function applyTranslation(lang) {
    if (!translations[lang]) {
        console.error(`No translations available for language: ${lang}`);
        return; 
    }

    console.log("Lang value:", lang);

    document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
    if (translations[lang] && translations[lang].meta) {
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
        document.title = translations[lang].meta.title;
    } else {
        console.warn("Translation for the specified language is not available.");
    }    
    document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
    document.title = translations[lang].meta.title;
    document.querySelector('img[src="photo_2023-08-06_15-42-25 (85).jpg"]').setAttribute("alt", translations[lang].images["photo_2023-08-06_15-42-25 (85).jpg"]);
    let imgElement = document.querySelector('img[src="photo_2023-08-06_15-42-25 (85).jpg"]');
    if (imgElement) {
        imgElement.setAttribute("alt", translations[lang].images["photo_2023-08-06_15-42-25 (85).jpg"]);
    }

    document.querySelectorAll('img[alt="Bild von MacBook Air 15"]').forEach(img => {
        img.setAttribute('alt', translations[lang].images.macbook_air_15);
    });

    document.querySelector('h1').textContent = translations[lang].content.h1;
    document.querySelector('#preorderContent h3').textContent = translations[lang].content.h3_preorder;
    document.querySelector('#preorderContent p').textContent = translations[lang].content.p_description;
    document.querySelector('#preorderContent button').textContent = translations[lang].content.button_order;

    document.querySelector('.promo-content h3:nth-child(1)').textContent = translations[lang].promo_content.h3_1;
    document.querySelector('.promo-content h3:nth-child(3)').textContent = translations[lang].promo_content.h3_2;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3_2;
    document.querySelector('.promo-content p:nth-child(2)').textContent = translations[lang].promo_content.p1;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3;
    document.querySelector('.promo-content p:nth-child(4)').textContent = translations[lang].promo_content.p2;
    document.querySelector('.promo-content button').textContent = translations[lang].promo_content.button_order;

    var specSections = document.querySelectorAll('.specs-section');
    var specCategories = Object.keys(translations[lang].specifications);

    specSections.forEach((section, idx) => {
        var specCategory = specCategories[idx];
        var specKeys = Object.keys(translations[lang].specifications[specCategory]);
        specKeys.forEach(function(key, index) {
            section.querySelector(`.spec-row:nth-child(${index + 1}) .spec-value`).textContent = translations[lang].specifications[specCategory][key];
        });
    });

    document.getElementById('languageSelector').addEventListener('change', function() {
        applyTranslation(this.value);
    });
    
}

window.onload = function() {
    const userLang = determineLocation();
    applyTranslation(userLang);
    
    // Устанавливаем выбранным язык пользователя в выпадающем списке
    document.getElementById('languageSelector').value = userLang;
}


document.getElementById('languageSelector').addEventListener('change', function() {
    applyTranslation(this.value);
});