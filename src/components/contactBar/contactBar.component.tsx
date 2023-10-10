import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import { contacts } from './contactBar.data';
import css from './contactBar.module.css';
import ContactElement from './contactElement/contactElement.component';

const ContactBar = () => {
  return (
    <BarLayout>
      <SectionHeader title='Recent Contacts' otherText='All Contacts' />
      <div id={css.contactContainer}>
        {contacts.map(contact => (
          <ContactElement {...contact} />
        ))}
      </div>
    </BarLayout>
  );
};

export default ContactBar;
