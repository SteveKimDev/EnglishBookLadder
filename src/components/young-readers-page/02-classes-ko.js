import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const ClassSection = () => (
  <StaticQuery
    query={graphql`
      query YoungReadersPageClassesKorean {
        allContentfulYoungReadersPageAssembly {
          nodes {
            youngReadersTitleKorean
            youngReadersDescriptionKorean {
              youngReadersDescriptionKorean
            }
            class1 {
              classTitleKorean
              classDetailsKorean {
                raw
              }
            }
            class2 {
              classTitleKorean
              classDetailsKorean {
                raw
              }
            }
            class3 {
              classTitleKorean
              classDetailsKorean {
                raw
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background last-section`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersDescriptionKorean.youngReadersDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classTitleKorean
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classDetailsKorean
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classTitleKorean
            }
          </h3>

          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classDetailsKorean
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classTitleKorean
            }
          </h3>

          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classDetailsKorean
            )}
          </div>
        </div>
      </section>
    )}
  />
);

export default ClassSection;
