/**
 * 同步解析当前客户端环境
 * @param clientClassList : Array<ClientClase>    必须；客户端类数组
 * @return Client
 */
import {Client} from "./client";

type ClientClass = typeof Client;

export function synParseEnv(clientClassList:ClientClass[]):Client;





/**
 * 异步解析当前客户端环境
 * @param clientClassList : Array<ClientClase>    必须；客户端类数组
 * @return Promise<Client>   返回一个promise，该 promise 的 解决的参数是 Client 实例
 */
export function asynParseEnv(clientClassList:ClientClass[]):Promise<Client>;






/**
 * 解析当前客户端环境，它会先进行同步解析，如果同步解析不成功，则会进行异步解析
 * @param clientClassList : Array<ClientClase>    必须；客户端类数组
 * @param timeout : number    必须；解析超时时间；
 * @param succHandle : (client : Client, asyn : boolean)=>Void    必须；成功解析时的回调函数；
 * @param defaultClientClass : ClientClass    可选；解析超时时的默认客户端类型；
 */
export function parseEnv(clientClassList:ClientClass[],timeout:number,succHandle:(client : Client, asyn : boolean)=>void,defaultClientClass:ClientClass):void;
