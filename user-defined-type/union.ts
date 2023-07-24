let userNID: string | number | boolean;

userNID = 'sdf';
userNID = 34;
userNID = true;

const checkUnion = (ab: string | number | boolean) => {
  console.log(ab)
}

// checkUnion('34')
checkUnion(53)