export interface InitialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export interface Channel {
  id: string;
  channel: DocumentData;
}

export interface InitialChannelState {
  channelId: string | null;
  channelname: string | null;
}

export interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}
