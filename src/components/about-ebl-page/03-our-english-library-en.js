import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import AboutEblImgTwo from './about-images/about-img-02';

import * as AboutStyle from './about-ebl.module.css';

const OurEnglishLibrarySection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageourEnglishLibraryEnglish {
        allContentfulAboutEblPageAssembly {
          nodes {
            ourEnglishLibraryTitleEnglish
            ourEnglishLibrarySubtitleEnglish {
              ourEnglishLibrarySubtitleEnglish
            }
            ourEnglishLibraryDescriptionEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-white-background`}>
        <div>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAboutEblPageAssembly.nodes[0]
                .ourEnglishLibraryTitleEnglish
            }
          </h2>
          <p className={`text-center`}>
            <strong>
              {
                data.allContentfulAboutEblPageAssembly.nodes[0]
                  .ourEnglishLibrarySubtitleEnglish
                  .ourEnglishLibrarySubtitleEnglish
              }
            </strong>
          </p>
        </div>
        <div>
          <AboutEblImgTwo />
        </div>
        <div className={`${AboutStyle.aboutRichtext}`}>
          {renderRichText(
            data.allContentfulAboutEblPageAssembly.nodes[0]
              .ourEnglishLibraryDescriptionEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default OurEnglishLibrarySection;
