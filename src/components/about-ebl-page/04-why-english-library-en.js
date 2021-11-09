import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import AboutEblImgThree from './about-images/about-img-03';

import * as AboutStyle from './about-ebl.module.css';

const WhyEnglishLibrarySection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPagewhyEnglishLibraryEnglish {
        allContentfulAboutEblPageAssembly {
          nodes {
            whyEnglishLibraryTitleEnglish
            whyEnglishLibrarySubtitleEnglish {
              whyEnglishLibrarySubtitleEnglish
            }
            whyEnglishLibraryDescriptionEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background last-section`}>
        <div>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAboutEblPageAssembly.nodes[0]
                .whyEnglishLibraryTitleEnglish
            }
          </h2>
          <p className={`text-center`}>
            <strong>
              {
                data.allContentfulAboutEblPageAssembly.nodes[0]
                  .whyEnglishLibrarySubtitleEnglish
                  .whyEnglishLibrarySubtitleEnglish
              }
            </strong>
          </p>
        </div>
        <div>
          <AboutEblImgThree />
        </div>
        <div className={`${AboutStyle.aboutRichtext}`}>
          {renderRichText(
            data.allContentfulAboutEblPageAssembly.nodes[0]
              .whyEnglishLibraryDescriptionEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default WhyEnglishLibrarySection;
