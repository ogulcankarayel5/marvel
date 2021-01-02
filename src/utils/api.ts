import md5 from "md5";


//to use marvel api properly

const tokenHash = () => {
  return md5(
    "149cf190ddf338d513ad0fdea7ca7eb810633e8dc65cb83fb1cadab3f1fa083c0608e8f13"
  );
};

export const apiKey = `ts=1&apikey=65cb83fb1cadab3f1fa083c0608e8f13&hash=${tokenHash()}`;