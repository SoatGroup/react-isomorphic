const countries = {
	"france" : {
		"suffix": "fr",
		"title": "France"
	}, 
	"italie" : {
		"suffix": "it",
		"title": "Italie"
	},
	"guadeloupe" : {
		"suffix": "gp",
		"title": "Guadeloupe"
	},
	"martinique" : {
		"suffix": "mt",
		"title": "Martinique"
	},
	"espagne" : {
		"suffix": "es",
		"title": "Espagne"
	},
	"grece" : {
		"suffix": "gr",
		"title": "Grèce"
	},
	"reunion" : {
		"suffix": "re",
		"title": "La Réunion"
	},
	"tunisie" : {
		"suffix": "tn",
		"title": "Tunisie"
	},
	"maroc" : {
		"suffix": "ma",
		"title": "Maroc"
	},
	"malte" : {
		"suffix": "mt",
		"title": "Malte"
	}
}

module.exports = [
	{
		"id": 1,
		"name": "Parfum",
		"from": countries.france,
		"quantity": 100
	}, {
		"id": 2,
		"name": "Sirop de mangue",
		"from": countries.reunion,
		"quantity": 10
	}, {
		"id": 3,
		"name": "Tournevis",
		"from": countries.france,
		"quantity": 300
	}, {
		"id": 4,
		"name": "Huile d'olive",
		"from": countries.espagne,
		"quantity": 100
	}, {
		"id": 5,
		"name": "Portefeuille",
		"from": countries.espagne,
		"quantity": 200
	}, {
		"id": 6,
		"name": "Vins de bordeaux",
		"from": countries.france,
		"quantity": 150
	}, {
		"id": 7,
		"name": "Automobile",
		"from": countries.maroc,
		"quantity": 20
	}, {
		"id": 8,
		"name": "Pantalon",
		"from": countries.tunisie,
		"quantity": 50
	}, {
		"id": 9,
		"name": "Jus d'orange",
		"from": countries.maroc,
		"quantity": 80
	}, {
		"id": 10,
		"name": "Jus d'ananas",
		"from": countries.reunion,
		"quantity": 75
	}, {
		"id": 11,
		"name": "Sac à main",
		"from": countries.italie,
		"quantity": 125
	}, {
		"id": 12,
		"name": "<script>alert('test xss')</script>",
		"from": countries.malte,
		"quantity": 150
	}
];