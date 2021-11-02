import { useStaticQuery, graphql } from 'gatsby';

export const OffcanvasLinksKoreanQuery = () => {
  const offcanvasLinksKoreanData = useStaticQuery(graphql`
    query OffcanvasLinksKorean {
      contentfulNavigationLinks {
        homePageLinkKorean
        aboutPageKorean
        qandAPageKorean
        contactAndLocationPageKorean
        libraryMembershipProgramKorean
        youngReadersProgramKorean
        adultClassesKorean
        privateClassesKorean
        summerProgramKorean
        winterProgramKorean
      }
    }
  `);
  return offcanvasLinksKoreanData;
};
