class PlanetData {
    static getPlanetInfo(planetName) {
        const info = {
            sun: `
                <span class="highlight">★ SOLEIL ★</span><br>
                <strong>Type:</strong> Étoile (naine jaune G2V)<br>
                <strong>Diamètre:</strong> 1 392 684 km (109 Terres)<br>
                <strong>Masse:</strong> 1,989 × 10³⁰ kg (333 000 Terres)<br>
                <strong>Température:</strong> 5 500°C (surface) - 15 000 000°C (noyau)<br>
                <strong>Âge:</strong> 4,6 milliards d'années<br>
                <strong>Composition:</strong> 74% hydrogène, 24% hélium, 2% éléments lourds<br>
                <strong>Gravité de surface:</strong> 274 m/s² (28× la Terre)<br>
                <strong>Particularité:</strong> Représente 99,86% de la masse du système solaire
            `,
            
            mercury: `
                <span class="highlight">☿ MERCURE ☿</span><br>
                <strong>Type:</strong> Planète tellurique<br>
                <strong>Diamètre:</strong> 4 879 km (0,38× Terre)<br>
                <strong>Distance du Soleil:</strong> 57,9 millions de km (0,39 UA)<br>
                <strong>Période orbitale:</strong> 88 jours terrestres<br>
                <strong>Rotation:</strong> 59 jours terrestres<br>
                <strong>Température:</strong> -173°C à 427°C<br>
                <strong>Atmosphère:</strong> Très ténue (oxygène, sodium, hydrogène)<br>
                <strong>Satellites:</strong> Aucune<br>
                <strong>Gravité:</strong> 3,7 m/s² (0,38× Terre)<br>
                <strong>Particularité:</strong> Plus petite planète et plus grande variation thermique
            `,
            
           venus: `
                <span class="highlight">♀ VÉNUS ♀</span><br>
                <strong>Type:</strong> Planète tellurique<br>
                <strong>Diamètre:</strong> 12 104 km (0,95× Terre)<br>
                <strong>Distance du Soleil:</strong> 108,2 millions de km (0,72 UA)<br>
                <strong>Période orbitale:</strong> 225 jours terrestres<br>
                <strong>Rotation:</strong> 243 jours terrestres (rétrograde)<br>
                <strong>Température:</strong> 462°C en moyenne<br>
                <strong>Atmosphère:</strong> Dense (96% CO₂, pression 92× Terre)<br>
                <strong>Satellites:</strong> Aucune<br>
                <strong>Gravité:</strong> 8,87 m/s² (0,91× Terre)<br>
                <strong>Particularité:</strong> Effet de serre extrême - jour plus long que l'année
            `,
            
            earth: `
                <span class="highlight">♁ TERRE ♁</span><br>
                <strong>Type:</strong> Planète tellurique<br>
                <strong>Diamètre:</strong> 12 742 km<br>
                <strong>Distance du Soleil:</strong> 149,6 millions de km (1 UA)<br>
                <strong>Période orbitale:</strong> 365,25 jours<br>
                <strong>Rotation:</strong> 23h 56min 4s<br>
                <strong>Température:</strong> -88°C à 58°C (moyenne 15°C)<br>
                <strong>Atmosphère:</strong> 78% N₂, 21% O₂, 1% Ar<br>
                <strong>Satellites:</strong> 1 (La Lune)<br>
                <strong>Gravité:</strong> 9,81 m/s²<br>
                <strong>Particularité:</strong> Seule planète avec de l'eau liquide et la vie
            `,
            
            mars: `
                <span class="highlight">♂ MARS ♂</span><br>
                <strong>Type:</strong> Planète tellurique<br>
                <strong>Diamètre:</strong> 6 779 km (0,53× Terre)<br>
                <strong>Distance du Soleil:</strong> 227,9 millions de km (1,52 UA)<br>
                <strong>Période orbitale:</strong> 687 jours terrestres<br>
                <strong>Rotation:</strong> 24h 37min 23s<br>
                <strong>Température:</strong> -87°C à -5°C (moyenne -65°C)<br>
                <strong>Atmosphère:</strong> Ténue (95% CO₂, pression 0,6% Terre)<br>
                <strong>Satellites:</strong> 2 (Phobos et Deimos)<br>
                <strong>Gravité:</strong> 3,71 m/s² (0,38× Terre)<br>
                <strong>Particularité:</strong> Olympus Mons : plus grand volcan (25 km)
            `,
            
            jupiter: `
                <span class="highlight">♃ JUPITER ♃</span><br>
                <strong>Type:</strong> Géante gazeuse<br>
                <strong>Diamètre:</strong> 139 820 km (11,2× Terre)<br>
                <strong>Distance du Soleil:</strong> 778,5 millions de km (5,2 UA)<br>
                <strong>Période orbitale:</strong> 11,9 années terrestres<br>
                <strong>Rotation:</strong> 9h 56min (la plus rapide)<br>
                <strong>Température:</strong> -108°C en moyenne<br>
                <strong>Atmosphère:</strong> 90% H₂, 10% He (avec bandes nuageuses)<br>
                <strong>Satellites:</strong> 95 connus (dont Europe, Ganymède, Io, Callisto)<br>
                <strong>Anneaux:</strong> Oui (discrets)<br>
                <strong>Particularité:</strong> Plus grande planète - Grande Tache Rouge (tempête géante)
            `,
            
            saturn: `
                <span class="highlight">♄ SATURNE ♄</span><br>
                <strong>Type:</strong> Géante gazeuse<br>
                <strong>Diamètre:</strong> 116 460 km (9,45× Terre)<br>
                <strong>Distance du Soleil:</strong> 1,43 milliard de km (9,58 UA)<br>
                <strong>Période orbitale:</strong> 29,5 années terrestres<br>
                <strong>Rotation:</strong> 10h 42min<br>
                <strong>Température:</strong> -138°C en moyenne<br>
                <strong>Atmosphère:</strong> 96% H₂, 3% He<br>
                <strong>Satellites:</strong> 146 connus (dont Titan, Encelade)<br>
                <strong>Anneaux:</strong> Oui (système majeur de glace et poussière)<br>
                <strong>Particularité:</strong> Densité inférieure à l'eau - anneaux spectaculaires
            `,
            
            uranus: `
                <span class="highlight">♅ URANUS ♅</span><br>
                <strong>Type:</strong> Géante de glace<br>
                <strong>Diamètre:</strong> 50 724 km (4,01× Terre)<br>
                <strong>Distance du Soleil:</strong> 2,87 milliards de km (19,2 UA)<br>
                <strong>Période orbitale:</strong> 84 années terrestres<br>
                <strong>Rotation:</strong> 17h 14min (rétrograde, incliné à 98°)<br>
                <strong>Température:</strong> -197°C en moyenne<br>
                <strong>Atmosphère:</strong> 83% H₂, 15% He, 2% CH₄ (méthane)<br>
                <strong>Satellites:</strong> 27 connus (dont Titania, Obéron)<br>
                <strong>Anneaux:</strong> Oui (sombres et fins)<br>
                <strong>Particularité:</strong> Rotation sur le côté - couleur bleu-vert du méthane
            `,
            
            neptune: `
                <span class="highlight">♆ NEPTUNE ♆</span><br>
                <strong>Type:</strong> Géante de glace<br>
                <strong>Diamètre:</strong> 49 244 km (3,88× Terre)<br>
                <strong>Distance du Soleil:</strong> 4,5 milliards de km (30,1 UA)<br>
                <strong>Période orbitale:</strong> 165 années terrestres<br>
                <strong>Rotation:</strong> 16h 6min<br>
                <strong>Température:</strong> -201°C en moyenne<br>
                <strong>Atmosphère:</strong> 80% H₂, 19% He, 1% CH₄<br>
                <strong>Satellites:</strong> 14 connus (dont Triton)<br>
                <strong>Anneaux:</strong> Oui (au moins 5 anneaux)<br>
                <strong>Particularité:</strong> Vents les plus rapides (2 100 km/h) - Grande Tache Sombre
            `,
            
            moon: `
                <span class="highlight">🌙 LA LUNE 🌙</span><br>
                <strong>Type:</strong> Satellite naturel<br>
                <strong>Diamètre:</strong> 3 474 km (0,27× Terre)<br>
                <strong>Distance de la Terre:</strong> 384 400 km<br>
                <strong>Période orbitale:</strong> 27,3 jours<br>
                <strong>Rotation:</strong> 27,3 jours (rotation synchrone)<br>
                <strong>Température:</strong> -173°C à 127°C<br>
                <strong>Atmosphère:</strong> Très ténue (exosphère)<br>
                <strong>Gravité:</strong> 1,62 m/s² (1/6 de la Terre)<br>
                <strong>Particularité:</strong> Seul astre visité par l'homme - influence les marées
            `,
            
            phobos: `
                <span class="highlight">🪐 PHOBOS</span><br>
                <strong>Type:</strong> Satellite de Mars<br>
                <strong>Diamètre:</strong> 22,2 km<br>
                <strong>Distance de Mars:</strong> 9 377 km<br>
                <strong>Période orbitale:</strong> 7h 39min<br>
                <strong>Forme:</strong> Irrégulière (27 × 22 × 18 km)<br>
                <strong>Composition:</strong> Rocheux, riche en carbone<br>
                <strong>Gravité:</strong> 0,0057 m/s² (très faible)<br>
                <strong>Particularité:</strong> Se rapproche de Mars de 1,8 cm par an - impact futur
            `,
            
            deimos: `
                <span class="highlight">🪐 DEIMOS</span><br>
                <strong>Type:</strong> Satellite de Mars<br>
                <strong>Diamètre:</strong> 12,4 km<br>
                <strong>Distance de Mars:</strong> 23 460 km<br>
                <strong>Période orbitale:</strong> 30h 18min<br>
                <strong>Forme:</strong> Irrégulière (15 × 12 × 11 km)<br>
                <strong>Composition:</strong> Rocheux, similaire aux astéroïdes<br>
                <strong>Gravité:</strong> 0,003 m/s² (très faible)<br>
                <strong>Particularité:</strong> Surface lisse - éjecta comblant les cratères
            `,
            
            io: `
                <span class="highlight">🪐 IO</span><br>
                <strong>Type:</strong> Satellite de Jupiter<br>
                <strong>Diamètre:</strong> 3 643 km<br>
                <strong>Distance de Jupiter:</strong> 421 700 km<br>
                <strong>Période orbitale:</strong> 1,77 jours terrestres<br>
                <strong>Particularité:</strong> Corps le plus volcanique du système solaire
            `,

            europa: `
                <span class="highlight">🪐 EUROPA</span><br>
                <strong>Type:</strong> Satellite de Jupiter<br>
                <strong>Diamètre:</strong> 3 122 km<br>
                <strong>Distance de Jupiter:</strong> 671 034 km<br>
                <strong>Période orbitale:</strong> 3,55 jours terrestres<br>
                <strong>Particularité:</strong> Océan souterrain potentiellement habitable
            `,

            ganymede: `
                <span class="highlight">🪐 GANYMEDE</span><br>
                <strong>Type:</strong> Satellite de Jupiter<br>
                <strong>Diamètre:</strong> 5 268 km<br>
                <strong>Distance de Jupiter:</strong> 1 070 400 km<br>
                <strong>Période orbitale:</strong> 7,15 jours terrestres<br>
                <strong>Particularité:</strong> Plus grand satellite du système solaire
            `,

            callisto: `
                <span class="highlight">🪐 CALLISTO</span><br>
                <strong>Type:</strong> Satellite de Jupiter<br>
                <strong>Diamètre:</strong> 4 821 km<br>
                <strong>Distance de Jupiter:</strong> 1 882 700 km<br>
                <strong>Période orbitale:</strong> 16,69 jours terrestres<br>
                <strong>Particularité:</strong> Surface très cratérisée, ancienne
            `,

            titan: `
                <span class="highlight">🪐 TITAN</span><br>
                <strong>Type:</strong> Satellite de Saturne<br>
                <strong>Diamètre:</strong> 5 151 km<br>
                <strong>Distance de Saturne:</strong> 1 221 870 km<br>
                <strong>Période orbitale:</strong> 15,95 jours terrestres<br>
                <strong>Particularité:</strong> Seul satellite avec une atmosphère dense
            `
        };
        return info[planetName] || "Corps céleste mystérieux du système solaire.";
    }


    static getPlanetsConfig() {
        return [
            { name: 'sun', radius: 3, color: 0xff4500, distance: 0, rotationSpeed: 0.001, revolutionSpeed: 0, emissive: true },
            { name: 'mercury', radius: 0.4, color: 0x8c8c8c, distance: 8, rotationSpeed: 0.008, revolutionSpeed: 0.04 },
            { name: 'venus', radius: 0.6, color: 0xe6b87e, distance: 11, rotationSpeed: 0.006, revolutionSpeed: 0.015 },
            { name: 'earth', radius: 0.7, color: 0x1e90ff, distance: 14, rotationSpeed: 0.01, revolutionSpeed: 0.01 },
            { name: 'mars', radius: 0.5, color: 0xc1440e, distance: 17, rotationSpeed: 0.009, revolutionSpeed: 0.005 },
            { name: 'jupiter', radius: 1.5, color: 0xc19b6c, distance: 22, rotationSpeed: 0.02, revolutionSpeed: 0.001 },
            { name: 'saturn', radius: 1.3, color: 0xe3cda5, distance: 28, rotationSpeed: 0.018, revolutionSpeed: 0.0007 },
            { name: 'uranus', radius: 1.0, color: 0x4fd0e7, distance: 34, rotationSpeed: 0.015, revolutionSpeed: 0.0004 },
            { name: 'neptune', radius: 1.0, color: 0x4b70dd, distance: 40, rotationSpeed: 0.015, revolutionSpeed: 0.0002 }
        ];
    }

    static getMoonsConfig() {
        return [
            { parent: 'earth', radius: 0.15, distance: 1.2, color: 0xcccccc, name: 'moon' },
            { parent: 'mars', radius: 0.08, distance: 1.0, color: 0x888888, name: 'phobos' },
            { parent: 'mars', radius: 0.06, distance: 1.5, color: 0x666666, name: 'deimos' },
            { parent: 'jupiter', radius: 0.12, distance: 2.0, color: 0xff6b6b, name: 'io' },
            { parent: 'jupiter', radius: 0.10, distance: 2.5, color: 0x4ecdc4, name: 'europa' },
            { parent: 'jupiter', radius: 0.14, distance: 3.0, color: 0x45b7d1, name: 'ganymede' },
            { parent: 'jupiter', radius: 0.13, distance: 3.5, color: 0x96ceb4, name: 'callisto' },
            { parent: 'saturn', radius: 0.11, distance: 2.2, color: 0xf9a825, name: 'titan' }
        ];
    }
}