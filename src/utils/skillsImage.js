
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import Express from "../assets/svg/skills/expressjs-ar21.svg";
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import java from '../assets/svg/skills/java.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import wolframalpha from '../assets/svg/skills/wolframalpha.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case "html":
        return html;
      case "photoshop":
        return photoshop;
      case "illustrator":
        return illustrator;
      case "css":
        return css;
      case "javascript":
        return javascript;
      case "react":
        return react;
      case "bootstrap":
        return bootstrap;
      case "mongodb":
        return mongoDB;
      case "mysql":
        return mysql;
      case "tailwind":
        return tailwind;
      case "c":
        return c;
      case "c++":
        return cplusplus;
      case "c#":
        return csharp;
      case "Express":
        return Express;
      case "java":
        return java;
      case "matlab":
        return matlab;
      case "php":
        return php;
      case "python":
        return python;
      case "firebase":
        return firebase;
      case "gimp":
        return gimp;
      case "git":
        return git;
      case "graphql":
        return graphql;
      case "numpy":
        return numpy;
      case "figma":
        return figma;
      case "flutter":
        return flutter;
      case "microsoft office":
        return microsoftoffice;
      case "picsart":
        return picsart;
      case "wolframalpha":
        return wolframalpha;
      case "canva":
        return canva;
      default:
        break;
    }
}
