import {Video} from "./Video";

export interface Commentary {
  video: Video;
  staff: string;
  matchLink: string;
  champion: string;
  opponent: string;
  kills: number;
  deaths: number;
  assists: number;
  gameLengthInSeconds: number;
  carry: string;
  type: string;
}
