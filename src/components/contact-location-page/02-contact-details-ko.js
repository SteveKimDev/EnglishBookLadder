import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Row, Col } from 'react-bootstrap';

import * as ContactStyle from './contact.module.css';

const ContactAndLocationSection = () => (
  <StaticQuery
    query={graphql`
      query ContactAndLocationPageDetailsKorean {
        allContentfulContactAndLocationPageAssembly {
          nodes {
            contactAndLocationDetailsKorean {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background last-section`}>
        <Row>
          <Col lg={6} className={`${ContactStyle.contactRichtext}`}>
            {renderRichText(
              data.allContentfulContactAndLocationPageAssembly.nodes[0]
                .contactAndLocationDetailsKorean
            )}
          </Col>
          <Col lg={6} className={`${ContactStyle.mapCol}`}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.2159297445382!2d127.10298923432163!3d37.36106729997194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x196ab803e7b47841!2zMzfCsDIxJzM5LjgiTiAxMjfCsDA2JzE4LjciRQ!5e0!3m2!1sen!2smx!4v1636664780519!5m2!1sen!2smx'
              className={ContactStyle.map}
              title='map'
              width='450'
              height='600'
              frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
            />
          </Col>
        </Row>
      </section>
    )}
  />
);

export default ContactAndLocationSection;
