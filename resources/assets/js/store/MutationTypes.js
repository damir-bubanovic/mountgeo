/**
 * Auth
 * > welcome
 * > register
 * > login
 * > logout
 */
export const WELCOME_LOGIN_REGISTER_PAGE = 'WELCOME_LOGIN_REGISTER_PAGE';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
/**
 * Google Maps
 * > initialize google map
 * > google maps type - basic / detail
 * > show user location
 * > hide user location
 * > show target location
 * > hide target location
 * > show full route path
 * > clear full route path
 * > create user path marker
 * > clear user path markers
 */
export const GOOGLE_MAPS = 'GOOGLE_MAPS';
export const GOOGLE_MAPS_TYPE = 'GOOGLE_MAPS_TYPE';
export const SHOW_USER_LOCATION = 'SHOW_USER_LOCATION';
export const HIDE_USER_LOCATION = 'HIDE_USER_LOCATION';
export const SHOW_TARGET_LOCATION = 'SHOW_TARGET_LOCATION';
export const HIDE_TARGET_LOCATION = 'HIDE_TARGET_LOCATION';
export const SHOW_FULL_ROUTE_GPS = 'SHOW_FULL_ROUTE_GPS';
export const CLEAR_FULL_ROUTE_GPS = 'CLEAR_FULL_ROUTE_GPS';
export const CREATE_USER_PATH_MARKER = 'CREATE_USER_PATH_MARKER';
export const CLEAR_USER_PATH_MARKERS = 'CLEAR_USER_PATH_MARKERS';
/**
 * Mountain
 * > create mountain
 * > update mountain
 * > delete mountain
 * > get mountain list
 * > selected mountain
 * > clear mountain
 */
export const CREATE_MOUNTAIN = 'CREATE_MOUNTAIN';
export const UPDATE_MOUNTAIN = 'UPDATE_MOUNTAIN';
export const DELETE_MOUNTAIN = 'DELETE_MOUNTAIN';
export const GET_MOUNTAINS = 'GET_MOUNTAINS';
export const SELECTED_MOUNTAIN = 'SELECTED_MOUNTAIN';
export const CLEAR_MOUNTAIN = 'CLEAR_MOUNTAIN';
/**
 * Loading
 * > loading on
 * > loading oof
 */
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';
/**
 * Route
 * > upload kml file
 * > upload gpx file
 * > store file
 * > post kml route
 * > post gpx route
 * > post custom route
 * > get list of routes
 * > get route
 * > update route
 * > delete route
 * > clear route
 * > clear full route
 * > clear route from vuex
 * > get full route
 * > get full route with gsp data
 * > elevation chart
 */
export const FILE_KML = 'FILE_KML';
export const FILE_GPX = 'FILE_GPX';
export const FILE_STORED = 'FILE_STORED';
export const ROUTE_KML = 'ROUTE_KML';
export const ROUTE_GPX = 'ROUTE_GPX';
export const ROUTE_CUSTOM = 'ROUTE_CUSTOM';
export const GET_ROUTES = 'GET_ROUTES';
export const GET_ROUTE = 'GET_ROUTE';
export const UPDATE_ROUTE = 'UPDATE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';
export const CLEAR_ROUTE = 'CLEAR_ROUTE';
export const CLEAR_FULL_ROUTE = 'CLEAR_FULL_ROUTE';
export const GET_FULL_ROUTE = 'GET_FULL_ROUTE';
export const GET_FULL_ROUTE_GPS = 'GET_FULL_ROUTE_GPS';
export const ELEVATION_CHART = 'ELEVATION_CHART';
/**
 * Story
 * > get list of stories
 * > get storie
 * > create story
 * > update story
 * > delete story
 * > clear story from vuex
 */
export const GET_STORIES = 'GET_STORIES';
export const GET_STORY = 'GET_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const CLEAR_STORY = 'CLEAR_STORY';
/**
 * Refuge
 * > create refuge
 * > update refuge
 * > get list of refuges
 * > get refuge
 * > delete refuge
 * > clear refuge from vuex
 */
export const CREATE_REFUGE = 'CREATE_REFUGE';
export const UPDATE_REFUGE = 'UPDATE_REFUGE';
export const GET_REFUGES = 'GET_REFUGES';
export const GET_REFUGE = 'GET_REFUGE';
export const DELETE_REFUGE = 'DELETE_REFUGE';
export const CLEAR_REFUGE = 'CLEAR_REFUGE';
/**
 * Clear Select Values
 * > clear database component section
 * > reload clear database event
 * > clear information component section
 * > reload clear information event
 */
export const CLEAR_SELECT_VALUES_DATABASE = "CLEAR_SELECT_VALUES_DATABASE";
export const RELOAD_CLEAR_DATABASE_EVENT = "RELOAD_CLEAR_DATABASE_EVENT";
export const CLEAR_SELECT_VALUES_INFORMATION = "CLEAR_SELECT_VALUES_INFORMATION";
export const RELOAD_CLEAR_INFORMATION_EVENT = "RELOAD_CLEAR_INFORMATION_EVENT";