export const productCategories = [
    {
        id: 'poultry',
        name: 'Poultry',
        slug: 'poultry',
        subCategories: [
            {
                id: 'nutritional',
                name: 'Nutritional Supplements',
                items: [
                    { 
                        id: 'vitamin-mineral', 
                        name: 'Vitamin & Mineral Supplements',
                        items: [
                            { id: 'toxelim-b-gold', name: 'TOXELIM-B GOLD & TOXELIM-B GOLD PLUS' },
                            { id: 'toxelim-b-gold-tm', name: 'TOXELIM – B GOLD TM' },
                            { id: 'toxelim-b-powder', name: 'TOXELIM-B (powder)' },
                            { id: 'quit-stress', name: 'QUIT STRESS' },
                            { id: 'quitstress-gold', name: 'QUITSTRESS GOLD' },
                            { id: 'b-com-more', name: 'B-Com More' },
                            { id: 'calciboost', name: 'CALCIBOOST' },
                            { id: 'succical-fs', name: 'SUCCICAL-FS' },
                            { id: 'succcical-m', name: 'SUCCCICAL-M' },
                            { id: 'succical-gold', name: 'SUCCICAL GOLD' },
                            { id: 'qualimin', name: 'QUALIMIN' },
                            { id: 'toxiclean', name: 'TOXICLEAN' },
                            { id: 'erythroboon', name: 'ERYTHROBOON' },
                            { id: 'thermiquit', name: 'THERMIQUIT' },
                            { id: 'tocovit-bs', name: 'TOCOVIT-BS' },
                            { id: 'avit', name: 'Avit' },
                            { id: 'erythroboon-fs', name: 'ERYTHROBOON-FS' }
                        ]
                    },
                    { 
                        id: 'growth-promoters', 
                        name: 'Growth Promotors',
                        items: [
                            { id: 'avigrow', name: 'AVIGROW' },
                            { id: 'proboon-ws-fs', name: 'PROBOON – WS & FS' },
                            { id: 'lineodx', name: 'LINEODX' }
                        ]
                    }
                ]
            },
            {
                id: 'antimicrobials',
                name: 'Antimicrobials',
                items: [
                    { 
                        id: 'antibiotics', 
                        name: 'Antibiotics',
                        items: [
                            { id: 'avicure-fs', name: 'Avicure-FS' },
                            { id: 'bromelev', name: 'BROMELEV' },
                            { id: 'colisten-feed-premix', name: 'Colisten (feed Premix)' }
                        ]
                    }
                ]
            },
            {
                id: 'biosecurity',
                name: 'Bio Security',
                items: [
                    { 
                        id: 'pest-rat', 
                        name: 'Pest Management (Rat Control)',
                        items: [{ id: 'eliminator', name: 'ELIMINATOR' }]
                    },
                    { 
                        id: 'pest-larvicides', 
                        name: 'Pest Management Larvicides',
                        items: [
                            { id: 'flynil', name: 'FLYNIL' },
                            { id: 'flynil-gold', name: 'FLYNIL GOLD' },
                            { id: 'no-larve-c', name: 'NO-LARVE -C' },
                            { id: 'no-larve-fa', name: 'NO-LARVE-FA' },
                            { id: 'no-larve-d', name: 'NO-LARVE-D' }
                        ]
                    },
                    { 
                        id: 'pest-fly', 
                        name: 'Pest Management Fly Control',
                        items: [{ id: 'spoton', name: 'SPOTON' }]
                    },
                    { 
                        id: 'water-sanitization', 
                        name: 'Water Sanitization',
                        items: [{ id: 'pure-tab-ds', name: 'PURE TAB -DS' }]
                    },
                    { 
                        id: 'cleaning-agents', 
                        name: 'Multipurpose Cleaning Agents',
                        items: [
                            { id: 'neustra-det', name: 'NEUTRA-DET' },
                            { id: 's-kleen', name: 'S-KLEEN' }
                        ]
                    },
                    { 
                        id: 'fumigation', 
                        name: 'Fumigation Device and Product',
                        items: [{ id: 'omniclean', name: 'OMNICLEAN' }]
                    },
                    { 
                        id: 'vehicle-foot-dip', 
                        name: 'Vehicle Dip and Foot Dip',
                        items: [
                            { id: 'phenokil', name: 'PHENOKIL' },
                            { id: 'forma-kleen', name: 'FORMA KLEEN' },
                            { id: 'nutra-det', name: 'NEUTRA-DET' },
                            { id: 'microkill-aqua', name: 'Microkil Aqua' }
                        ]
                    }
                ]
            },
            {
                id: 'antidiarrhoeals',
                name: 'Antidiarrhoeals',
                items: [
                    { 
                        id: 'probiotic-based', 
                        name: 'Probiotic Based',
                        items: [{ id: 'entrowin-ws-fs', name: 'ENTROWIN -WS & FS' }]
                    }
                ]
            }
        ]
    },
    {
        id: 'aquaculture',
        name: 'Aquaculture',
        slug: 'aquaculture',
        subCategories: [
            { id: 'nutritional-feed', name: 'Nutritional Feed Supplement' },
            { id: 'bioremediation', name: 'Pond Bioremediation' },
            { id: 'pond-biosecurity', name: 'Pond Biosecurity' },
            { id: 'pond-preparation', name: 'Pond Preparation' }
        ]
    },
    {
        id: 'large-animals',
        name: 'Large Animals',
        slug: 'large-animals'
    },
    {
        id: 'canine',
        name: 'Canine',
        slug: 'canine'
    },
    {
        id: 'sheep-goat',
        name: 'Sheep & Goat',
        slug: 'sheep-goat'
    }
];
