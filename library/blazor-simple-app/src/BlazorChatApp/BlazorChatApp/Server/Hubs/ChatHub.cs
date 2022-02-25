using System;
using BlazorChatApp.Shared;
using Microsoft.AspNetCore.SignalR;

namespace BlazorChatApp.Server.Hubs
{
	public class ChatHub : Hub
	{
        public override async Task OnConnectedAsync()
        {
            await AddMessage(String.Empty, "User Connected!");
            await base.OnConnectedAsync();
        }
        public async Task AddMessage(string user, string message)
        {
			await Clients.All.SendAsync(Chat.Methods.GetMessage, user, message);
        }
	}
}

