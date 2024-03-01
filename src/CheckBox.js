import React, { useState } from 'react';

const Folder = ({ folder, handleCheckboxChange }) => {
  const { name, isChecked, folders } = folder;
  const [isOpen, setIsOpen] = useState(false);

  const handleFolderCheckboxChange = () => {
    handleCheckboxChange(folder);
  };

  const handleFolderToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleFolderCheckboxChange}
        />
        <span onClick={handleFolderToggle}>
          {isOpen ? '▼' : '►'} {name}
        </span>
      </div>

      {isOpen && folders.length > 0 && (
        <ul style={{ paddingLeft: '20px',listStyle:"none" }}>
          {folders.map((childFolder) => (
            <li key={childFolder.id}>
              <Folder
                folder={childFolder}
                handleCheckboxChange={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CheckBox = () => {
  const initialFolderStructure = [
    {
      id: 1,
      name: 'Home',
      isChecked: false,
      folders: [
        {
          id: 2,
          name: 'Desktop',
          isChecked: false,
          folders: []
        },
        {
          id: 3,
          name: 'Documents',
          isChecked: false,
          folders: [],
        },
        {
          id: 4,
          name: 'Office',
          isChecked: false,
          folders: [],

        },
         {
          id: 5,
          name: 'Downloads',
          isChecked: false,
          folders: [],
        }
      ]
    }
  ];

  const [folderStructure, setFolderStructure] = useState(
    initialFolderStructure
  );

  const handleCheckboxChange = (clickedFolder) => {
    const updatedStructure = folderStructure.map((folder) => {
      if (folder.id === clickedFolder.id) {
        return {
          ...folder,
          isChecked: !folder.isChecked,
        };
      }
      return folder;
    });

    setFolderStructure(updatedStructure);
  };

  return (
    <div>
      {folderStructure.map((folder) => (
        <Folder
          key={folder.id}
          folder={folder}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default CheckBox;