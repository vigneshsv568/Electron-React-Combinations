import React from "react";
import { useParams } from "react-router";
import ChatUsersList from "../components/ChatUsersList";
import ViewTitle from "../components/shared/ViewTitle";
import ChatMes from "../components/ChatMes";
export default function Chat(){
    const {id} = useParams();
    return (
        
          <div className="row no-gutters fh">
            <div className="col-3 fh">
             <ChatUsersList />
            </div>
            <div className="col-9 fh">
             <ViewTitle text={`Joined Cahnnel: ${id}`} />
              <ChatMes />
            </div>
          </div>
       
      )
}