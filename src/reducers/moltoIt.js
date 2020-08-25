import { FORM_DATA, RESET_DATA } from '../constants';

const initialState = {
  problem_name: 'Jupyter', //Definir nombre de mision FINISH
  problem_type: 'rendezvous',
  planet_dep: 'Earth',
  planet_arr: 'Jupyter',
  vinf0_max: 1.6, //Definir por usuario y que sea definida en el tab de ventana de lanzamiento. ?? % Hyperbolic excess velocity at departure planet (km/s)
  planet_fb: [],
  rfb_min: 200,
  Isp: 3000,
  thrust: 100,
  nthrusters: 1,
  mass: 1000,
  power: 5000,
  n_fb: [0, 1],
  rev: [0, 0],
  ToF: [100, 1000],
  ToF_type: 'days',
  Initial_Date: ['2003-01-01', '2003-12-31'], //Si es ventana de lanzamiento amplia, es mejor una mayor poblacion.
  init_file: [],
  output_file: 'Jupyter.txt', //Definir nombrede mision FINISH
  plot: 0, // Cambiar plot a 1, indice de frente de pareto
  useParallel: 'no', //revisar logs
  options: [],
  maxGen: 20, //Maximo 1000
  popsize: 100, //Maximo 1000 -----> Tiempo de ejecución.
  output_dir: '~/tmp/Jupyter' //problem name define incluso la carpeta de destino.
};

const initialState_ = {
  problem_name: '',
  problem_type: '',
  planet_dep: '',
  planet_arr: '',
  vinf0_max: 0,
  planet_fb: [],
  rfb_min: 0,
  Isp: 0,
  thrust: 0,
  nthrusters: 0,
  mass: 0,
  power: 0,
  n_fb: [],
  rev: [],
  ToF: [],
  Initial_Date: [],
  init_file: [],
  output_file: '',
  plot: 0,
  useParallel: '',
  options: [],
  maxGen: 0,
  popsize: 0,
  output_dir: ''
};

export const moltoItConfig = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FORM_DATA:
      return Object.assign({}, state, payload);
    case RESET_DATA:
      return initialState_;
    default:
      return state;
  }
};
