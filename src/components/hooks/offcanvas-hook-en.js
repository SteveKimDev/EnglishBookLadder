import { useStaticQuery, graphql } from 'gatsby';

export const OffcanvasLinksEnglishQuery = () => {
  const offcanvasLinksEnglishData = useStaticQuery(graphql`
    query OffcanvasLinksEnglish {
      contentfulNavigationLinks {
        homePageLinkEnglish
        aboutPageEnglish
        qandAPageEnglish
        contactAndLocationPageEnglish
        libraryMembershipProgramEnglish
        youngReadersProgramEnglish
        adultClassesEnglish
        privateClassesEnglish
        summerProgramEnglish
        winterProgramEnglish
      }
    }
  `);
  return offcanvasLinksEnglishData;
};
