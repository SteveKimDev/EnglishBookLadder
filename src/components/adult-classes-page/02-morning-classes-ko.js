import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const MorningClassSection = () => (
  <StaticQuery
    query={graphql`
      query MorningClassesPageClassesKorean {
        allContentfulAdultClassesPageAssembly {
          nodes {
            morningClassTitleKorean
            morningClassDescriptionKorean {
              morningClassDescriptionKorean
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
            class6 {
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
      <section className={`section-blue-background`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassDescriptionKorean.morningClassDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classTitleKorean
            }
          </h3>
          <div>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classDetailsKorean
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classTitleKorean
            }
          </h3>
          <div>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classDetailsKorean
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classTitleKorean
            }
          </h3>
          <div>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classDetailsKorean
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class6
                .classTitleKorean
            }
          </h3>
          <div>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class6
                .classDetailsKorean
            )}
          </div>
        </div>
      </section>
    )}
  />
);

export default MorningClassSection;
