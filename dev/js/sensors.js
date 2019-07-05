"use strict";

var Sensors = {
  "default": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // FIXED WING
  AJS37: {
    airAbove: (50824.265625 + 30762.0546875) / 2,
    airBelow: (50824.265625 + 23405.912109375) / 2,
    ground: 6000
  },
  "A-10A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "A-10C": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "A-50": {
    airAbove: 204461.796875,
    airBelow: 204461.796875,
    ground: 6000
  },
  "An-26B": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "An-30M": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "B-1B": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "B-52H": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Bf-109K-4": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "C-101CC": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "C-101EB": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "C-130": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "C-17A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "E-2C": {
    airAbove: 210851.234375,
    airBelow: 210851.234375,
    ground: 2800
  },
  "E-3A": {
    airAbove: 255577.25,
    airBelow: 255577.25,
    ground: 3000
  },
  "F-14A": {
    airAbove: 111679.6328125,
    airBelow: 111679.6328125 / 2,
    ground: 6000
  },
  "F-15C": {
    airAbove: (59116.64453125 + 29424.57421875) / 2,
    airBelow: (59116.64453125 + 29558.322265625) / 2,
    ground: 6000
  },
  "F-15E": {
    airAbove: (59116.64453125 + 29424.57421875) / 2,
    airBelow: (59116.64453125 + 29558.322265625) / 2,
    ground: 6000
  },
  // Last updated unit
  "F-16A MLU": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "F-16A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "F-16C bl.50": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "F-16C bl.52d": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "F-5E-3": {
    airAbove: 49486.78515625,
    airBelow: 49486.78515625,
    ground: 6000
  },
  "F-5E": {
    airAbove: 24743.392578125,
    airBelow: 24743.392578125,
    ground: 6000
  },
  "F-86F Sabre": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "FA-18C": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "FW-190D9": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "IL-76MD": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "IL-78M": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "KC-135": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "L-39C": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "L-39ZA": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "M-2000C": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-15bis": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-21Bis": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-23MLD": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-25PD": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-25RBT": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-27K": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-29A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-29G": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-29S": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "MiG-31": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Mirage 2000-5": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "P-51D": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "RQ-1A Predator": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "S-3B Tanker": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "S-3B": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-17M4": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-24M": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-24MR": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-25": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-25T": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-25TM": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-27": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-30": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-33": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Su-34": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "TF-51D": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tornado GR4": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tornado IDS": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tu-142": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tu-160": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tu-22M3": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Tu-95MS": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Yak-40": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // ROTARY WING
  "AH-1W": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "AH-64A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "AH-64D": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "CH-47D": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "CH-53E": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Ka-27": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Ka-50": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Mi-24V": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Mi-26": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Mi-28N": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "Mi-8MT": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "OH-58D": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA342M: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "SH-60B": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "UH-1H": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  "UH-60A": {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // NAVY BLUE
  VINSON: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  PERRY: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  TICONDEROG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // NAVY RED
  ALBATROS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  KUZNECOW: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MOLNIYA: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MOSCOW: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  NEUSTRASH: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  PIOTR: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  REZKY: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // NAVY CIVIL
  ELNYA: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Drycargo_ship2: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Drycargo_ship1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZWEZDNY: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // Submarine
  KILO: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SOM: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // Speedboat
  speedboat: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // Infantry
  Soldier_AK: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Infantry_AK: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Soldier_M249: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Soldier_M4: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Soldier_M4_GRG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Soldier_RPG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Paratrooper_RPG16: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Paratrooper_AKS74: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // Howitzer
  _2B11_mortar: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SAU_Gvozdika: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SAU_Msta: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SAU_Akatsia: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SAU_2C9: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M109: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // IFV
  AAV7: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BMD1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BMP1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BMP2: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BMP3: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Boman: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BRDM2: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BTR80: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  BTR_D: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Bunker: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Cobra: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  LAV25: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1043_HMMWV_Armament: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1045_HMMWV_TOW: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1126_Stryker_ICV: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M113: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1134_Stryker_ATGM: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M2_Bradley: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Marder: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MCV80: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MTLB: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Sandbox: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  TPZ: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // MLRS
  GradURAL: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Uragan_BM27: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Smerch: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MLRS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // SAMS
  _2S6_Tunguska: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Kub_2P25_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  _5p73_s125_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_5P85C_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_5P85D_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA11_Buk_LN_9A310M1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Osa_9A33_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Tor_9A331: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Strela10M3: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Strela1_9P31: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA11_Buk_CC_9S470M1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA8_Osa_LD_9T217: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_AMG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_ECS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Gepard: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk_pcp: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA18_Igla_manpad: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA18_Igla_comm: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Igla_manpad_INS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA18_IglaS_manpad: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA18_IglaS_comm: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Vulcan: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M48_Chaparral: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M6_Linebacker: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_ln: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1097_Avenger: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_EPP: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_cp: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Roland_ADS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_54K6_cp: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Stinger_manpad_GRG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Stinger_manpad_dsr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Stinger_comm_dsr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Stinger_manpad: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Stinger_comm: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZSU234_Shilka: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZU23_Emplacement_Closed: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZU23_Emplacement: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZU23_Closed_Insurgent: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural375_ZU23_Insurgent: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZU23_Insurgent: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural375_ZU23: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // RADAR
  _1L13_EWR: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Kub_1S91_str: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_40B6M_tr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_40B6MD_sr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  _55G6_EWR: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  S300PS_64H6E_sr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SA11_Buk_SR_9S18M1: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Dog_Ear_radar: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk_tr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk_sr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Patriot_str: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hawk_cwar: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  p19_s125_sr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Roland_Radar: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  snr_s125_tr: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // TANK
  Challenger2: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Leclerc: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Leopard1A3: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Leopard2: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M60: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1128_Stryker_MGS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M1_Abrams: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  T55: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  T72B: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  T80UD: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  T90: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  // UNARMED
  Ural4320_APA5D: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ATMZ5: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ATZ10: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  GAZ3307: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  GAZ3308: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  GAZ66: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M978_HEMTT_Tanker: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  HEMTT_TFFT: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  IKARUS_Bus: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  KAMAZ_Truck: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  LAZ_Bus: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Hummer: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  M_818: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  MAZ6303: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Predator_GCS: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Predator_TrojanSpirit: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Suidae: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Tigr_233036: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Trolley_bus: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  UAZ469: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural_ATsP6: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural375_PBU: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural375: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural432031: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  Ural4320T: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  VAZ_Car: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZiL131_APA80: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  SKP11: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZIL131_KUNG: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  },
  ZIL4331: {
    airAbove: 6000,
    airBelow: 6000,
    ground: 6000
  }
};
module.exports = Sensors;