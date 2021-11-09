import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import AboutEblImgOne from './about-images/about-img-01';

const OurPhilosophySection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageOurPhilosophyKorean {
        allContentfulAboutEblPageAssembly {
          nodes {
            ourPhilosophyTitleKorean
            ourPhilosophySubtitleKorean {
              ourPhilosophySubtitleKorean
            }
            ourPhilosophyDescriptionKorean {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background`}>
        <div>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAboutEblPageAssembly.nodes[0]
                .ourPhilosophyTitleKorean
            }
          </h2>
          <p className={`text-center`}>
            <strong>
              {
                data.allContentfulAboutEblPageAssembly.nodes[0]
                  .ourPhilosophySubtitleKorean.ourPhilosophySubtitleKorean
              }
            </strong>
          </p>
        </div>
        <div>
          <AboutEblImgOne />
        </div>
        <div>
          {renderRichText(
            data.allContentfulAboutEblPageAssembly.nodes[0]
              .ourPhilosophyDescriptionKorean
          )}
        </div>
      </section>
    )}
  />
);

export default OurPhilosophySection;
