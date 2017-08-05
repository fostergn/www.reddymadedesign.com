const projects = [
	{
		name: 'Women\'s Building',
		slug: 'womens-building',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/TWB-Ext-01_11TH-AVE-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'The Women’s Building was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.',
		primaryTag: 'architecture',
		secondaryTags: ['interior', 'products'],
		relatedProjects: ['12-building', 'pool-pavilion']
	},
	{
		name: 'Pool Pavilion',
		slug: 'pool-pavilion',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/1_Shelter-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project, a 1,240 square foot insertion of a pool and pool house onto a wooded site on Shelter Island, NY seeks to harmonize the built landscape with the natural landscape.',
		primaryTag: 'interior',
		secondaryTags: ['collaborations', 'products'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: '12th Street Residence',
		slug: '12-street',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/12thStreet-3-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project for a model  – a single mother who traveled  between LA and NYC – was completed in 2012. It involved renovating a 1,400-square-foot duplex loft which had a mezzanine and 18-foot-high ceiling in the living area. Located in an historic building near Union Square, the loft had a warm southern exposure. (The Romanesque Revival-style building, erected in 1889, had served as an auction house for horse carriages and hansoms.)',
		primaryTag: 'products',
		secondaryTags: ['interior'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: 'Dougs House',
		slug: 'dougs-house',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/TWB-Ext-01_11TH-AVE-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'The Dougs House was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.',
		primaryTag: 'collaborations',
		secondaryTags: ['interior', 'products'],
		relatedProjects: ['12-building', 'pool-pavilion']
	},
	{
		name: 'Big Park Project',
		slug: 'big-park',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/1_Shelter-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project, a 1,240 square foot insertion of a pool and pool house onto a wooded site on Shelter Island, NY seeks to harmonize the built landscape with the natural landscape.',
		primaryTag: 'products',
		secondaryTags: ['collaborations', 'architecture'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: 'MOMA PS1',
		slug: 'moma-ps1',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/12thStreet-3-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project for a model  – a single mother who traveled  between LA and NYC – was completed in 2012. It involved renovating a 1,400-square-foot duplex loft which had a mezzanine and 18-foot-high ceiling in the living area. Located in an historic building near Union Square, the loft had a warm southern exposure. (The Romanesque Revival-style building, erected in 1889, had served as an auction house for horse carriages and hansoms.)',
		primaryTag: 'products',
		secondaryTags: ['interior'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: 'Bedford',
		slug: 'bedford',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/TWB-Ext-01_11TH-AVE-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'Bedford was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.',
		primaryTag: 'architecture',
		secondaryTags: ['interior', 'products'],
		relatedProjects: ['12-building', 'pool-pavilion']
	},
	{
		name: 'Meltzer',
		slug: 'meltzer',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/1_Shelter-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project, a 1,240 square foot insertion of a pool and pool house onto a wooded site on Shelter Island, NY seeks to harmonize the built landscape with the natural landscape.',
		primaryTag: 'interior',
		secondaryTags: ['collaborations', 'products'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: 'Petra',
		slug: 'petra',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/12thStreet-3-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project for a model  – a single mother who traveled  between LA and NYC – was completed in 2012. It involved renovating a 1,400-square-foot duplex loft which had a mezzanine and 18-foot-high ceiling in the living area. Located in an historic building near Union Square, the loft had a warm southern exposure. (The Romanesque Revival-style building, erected in 1889, had served as an auction house for horse carriages and hansoms.)',
		primaryTag: 'products',
		secondaryTags: ['interior'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: 'Salt Point',
		slug: 'salt-point',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/TWB-Ext-01_11TH-AVE-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'The Salt Point was conceived as a beacon in the Manhattan skyline rising to announce its important collaborative mission. The new building embraces the existing in ribbons of concrete and glass that flow together and emphasize notions of collaboration, transformation and power. Driven by the community needs it will serve, the Women’s Building has been designed as a visually strong fluent form that respects history and heritage, and translates it into dynamic interior spaces that encourage collaboration and community building.',
		primaryTag: 'collaborations',
		secondaryTags: ['interior', 'products'],
		relatedProjects: ['12-building', 'pool-pavilion']
	},
	{
		name: 'Prospect Park',
		slug: 'prospect-park',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/1_Shelter-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project, a 1,240 square foot insertion of a pool and pool house onto a wooded site on Shelter Island, NY seeks to harmonize the built landscape with the natural landscape.',
		primaryTag: 'products',
		secondaryTags: ['collaborations', 'architecture'],
		relatedProjects: ['12-building', 'womens-building']
	},
	{
		name: '45 Fifth - Reddy Residence',
		slug: '45-reddy',
		images: [
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/06/12thStreet-3-800x1200.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/plans-for-website_5and9-1600x1065.jpg',
			'https://www.reddymadedesign.com/wp-content/uploads/sites/2/2016/10/AERIAL-NEW-small-800x1200.jpg',
		],
		description: 'This project for a model  – a single mother who traveled  between LA and NYC – was completed in 2012. It involved renovating a 1,400-square-foot duplex loft which had a mezzanine and 18-foot-high ceiling in the living area. Located in an historic building near Union Square, the loft had a warm southern exposure. (The Romanesque Revival-style building, erected in 1889, had served as an auction house for horse carriages and hansoms.)',
		primaryTag: 'products',
		secondaryTags: ['interior', 'collaborations'],
		relatedProjects: ['12-building', 'womens-building']
	},
];

export default projects;