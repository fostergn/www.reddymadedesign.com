const initialState = {
	about: [],
  projects: [],
  instagram: [],
  features: [],
  landing: [],
  gridFilter: 'all', // all, architecture, products, collaborations, interior
  listFilter: [],
  workFilterOpen: true, // boolean
  workView: 'grid', // 'list'
  quadrantMode: 'none', // 'hover' || 'click'
  quadrant: 'none', // 1, 2, 3, 4
  isFullscreen: false,
  menuOpen: false,
  hasLoaded: false,
  isMobileFilterOpen: false,
};

export default initialState;
