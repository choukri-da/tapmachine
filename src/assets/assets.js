const imageModules = import.meta.glob("/src/assets/**/*.{jpg,png,svg}", {
  eager: true,
  as: "url",
});

const assets = {
  affichage: {},
  machines: {},
};

// Organise les images par catégorie
for (const path in imageModules) {
  const pathParts = path.split('/');
  const category = pathParts[pathParts.length - 2];
  const imageName = pathParts[pathParts.length - 1].split('.')[0];
  
  if (category === 'affichage') {
    assets.affichage[imageName] = imageModules[path];
  } else {
    if (!assets.machines[category]) {
      assets.machines[category] = [];
    }
    assets.machines[category].push(imageModules[path]);
  }
}

export const getMachineImages = (machineId) => {
  return assets.machines[machineId] || [];
};

export const getProductMainImage = (machineId) => {
  return assets.affichage[machineId] || null;
};

export default assets;

