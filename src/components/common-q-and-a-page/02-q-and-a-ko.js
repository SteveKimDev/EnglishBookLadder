import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as QAndAStyle from './q-and-a.module.css';

const CommonQAndASection = () => (
  <StaticQuery
    query={graphql`
      query CommonQAndAPageQandASectionKorean {
        allContentfulCommonQAndAPageAssembly {
          nodes {
            commonQAndATitleKorean
            commonQAndADetailsKorean {
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
              data.allContentfulCommonQAndAPageAssembly.nodes[0]
                .commonQAndATitleKorean
            }
          </h2>
        </div>
        <div className={`${QAndAStyle.detailsRichtext}`}>
          {renderRichText(
            data.allContentfulCommonQAndAPageAssembly.nodes[0]
              .commonQAndADetailsKorean
          )}
        </div>
      </section>
    )}
  />
);

export default CommonQAndASection;
