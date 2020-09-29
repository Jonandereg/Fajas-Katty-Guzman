

type User = {
  _id?:string,
  email:string,
  password:string,
  firstName?:string,
  lastName?:string,
  mobileNumber?: string,
  phoneNumber?: string,
  gender?:string,
  age?: number,
  address?: String,
  alergies?: String,
  SpecialConsiderations?: SpecialConsiderations,
  measurements?: Measurements[],
  orders?: Orders[]
}


type Orders = {
  date: Date,
  model: String,
  quantity: Number,
  status: String,
  payed: String
}

type SpecialConsiderations = {
  handStrength?: String,
  circulation?: String,
  Biopolimers?: String,
  other?: String
}

type Measurements = {
  date?: Date,
  siza?: Number,
  tiro?: Number,
  bustSize?: Number,
  contourLowerBust?: Number,
  contourWaist?: Number,
  contourHips?: Number,
  contourUpperThigh?: Number,
  contourMidThigh?: Number,
  contourAboveKnee?: Number,
  contourBelowKnee?: Number,
  contourCalf?: Number,
  lengthMidThigh?: Number,
  lengthAboveKnee?: Number,
  lengthBelowKnee?: Number,
  lengthCalf?: Number
}


export default User