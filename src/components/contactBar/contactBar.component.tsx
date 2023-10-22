import BarLayout from '@components/layouts/barLayout/barLayout.component';
import SectionHeader from '@components/sectionHeader/sectionHeader.component';
import PlusIcon from '@components/ui/icons/plusIcon.component';
import { useAuth } from '@hooks/useAuth.hook';
import { useContact } from '@hooks/useContact.hook';
import { useEffect } from 'react';
import css from './contactBar.module.css';
import ContactElement from './contactElement/contactElement.component';

const ContactBar = () => {
  const {
    state: { user }
  } = useAuth();

  const {
    state: { contacts },
    actions: { getContacts }
  } = useContact();

  useEffect(() => {
    user && getContacts(user.phone);
  }, []);

  return (
    <BarLayout>
      <SectionHeader title='Recent Contacts' otherText='All Contacts' />
      <div id={css.contactContainer}>
        <div id={css.addContact}>
          <div id={css.addContactCircle}>
            <PlusIcon />
          </div>
          <span>Add</span>
        </div>
        {contacts.map((contact, index) => (
          <ContactElement key={index} {...contact} />
        ))}
      </div>
    </BarLayout>
  );
};

export default ContactBar;
