import React,{useState} from "react";

const CustomApp = () => {
    const contacts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        // Add more contacts as needed
      ];
  return(
    <>
    <ContactChips contacts={contacts} />
    </>
  )
};

export default CustomApp;

const ContactChips = ({ contacts }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const toggleSelectContact = (contact) => {
    if (selectedContacts.some((c) => c.id === contact.id)) {
      setSelectedContacts(selectedContacts.filter((c) => c.id !== contact.id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-2">Selected Contacts:</h2>
        <div className="flex flex-wrap">
          {selectedContacts.map((contact) => (
            <ContactChip
              key={contact.id}
              contact={contact}
              selected={true}
              onSelect={toggleSelectContact}
            />
          ))}
        </div>
        <h2 className="text-lg font-semibold mt-4 mb-2">All Contacts:</h2>
        <div className="flex flex-wrap">
          {contacts.map((contact) => (
            <ContactChip
              key={contact.id}
              contact={contact}
              selected={selectedContacts.some((c) => c.id === contact.id)}
              onSelect={toggleSelectContact}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ContactChip = ({ contact, selected, onSelect }) => {
    const handleClick = () => {
      onSelect(contact);
    };
  
    return (
      <div
        className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${
          selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={handleClick}
      >
        {contact.name}
      </div>
    );
  };