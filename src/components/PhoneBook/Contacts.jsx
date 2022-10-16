import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import FormContacts from "./Form/FormContacts";

const Contacts = () => {
    return (
        <>
            <FormContacts />
            <Filter />
            <ContactList />
        </>
    )
}

export default Contacts;