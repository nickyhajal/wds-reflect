import { gql } from 'react-apollo';

export const Page = gql`
  query Page($slug: String) {
    page(slug: $slug){
      page_id
      content
      title
      slug
      status
    }
  }
`;

export const Event = gql`
  query Event($slug: String!) {
    event(slug: $slug){
      event_id
      format
      type
      who
      what
      descr
      address
      slug
      bios
      start
      endStr
      photo
      end
      price
      pay_link
      place
      lat
      lon
      max
      num_rsvps
      free_max
      num_free
      venue_note
      hosts {
        first_name
        last_name
        user_id
      }
    }
  }
`;

export const Events = gql`
  query Events($year: String!, $type: String) {
    events(year: $year, type: $type){
      event_id
      format
      type
      who
      what
      descr
      address
      slug
      start
      price
      pay_link
      startStr
      endStr
      end
      lat
      lon
      max
      num_rsvps
      free_max
      num_free
      hosts {
        first_name,
        last_name,
        user_id,
      }
    }
  }
`;
