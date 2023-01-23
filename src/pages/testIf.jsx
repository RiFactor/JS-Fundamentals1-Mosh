// const TestIf = () => {
//   // refactored PR
//   // https://bitbucket.org/3sidedcube/gca-earth-hq/pull-requests/391
//   // https://bitbucket.org/3sidedcube/gca-earth-hq/pull-requests/392

//   let numberOfHeadlines = mode_id
//     ? EXTREME_EVENTS_PER_MODE_MAX
//     : pageTypeId === PAGE_TYPE_ID.CURRENT_EVENT_PAGE
//     ? routePageTypeId === PAGE_TYPE_ID.INFO_PAGE
//       ? EXTREME_EVENTS_PER_MODE_MAX
//       : EXTREME_EVENTS_MAX
//     : pageTypeId === PAGE_TYPE_ID.INFO_PAGE
//     ? EXTREME_EVENTS_PER_MODE_MAX
//     : EXTREME_EVENTS_MAX;

//     let numberOfHeadlines = EXTREME_EVENTS_PER_MODE_MAX;
//     if (!mode_id) {
//     if (
//       pageTypeId === PAGE_TYPE_ID.INFO_PAGE ||
//       (pageTypeId === PAGE_TYPE_ID.CURRENT_EVENT_PAGE && routePageTypeId === PAGE_TYPE_ID.INFO_PAG)
//     ) {
//       numberOfHeadlines = EXTREME_EVENTS_INFO_PAGE_MAX; // EXTREME_EVENTS_PER_MODE_MAX
//     } else {
//       numberOfHeadlines = EXTREME_EVENTS_MAX;
//     }
// //   }
// };

// export default TestIf;
