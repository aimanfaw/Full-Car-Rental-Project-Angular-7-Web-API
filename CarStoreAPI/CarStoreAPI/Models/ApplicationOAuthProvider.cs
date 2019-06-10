using CarStoreAPI.Models;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CarStoreAPI
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var user = AuthService.GetLoginUser(context.UserName, context.Password);

            if (user != null)
            {
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);

                AuthenticationProperties data = CreateProperties(user);
                var ticket = new AuthenticationTicket(identity, data);

                context.Validated(ticket);
            }

        }

        public static AuthenticationProperties CreateProperties(RegisterUser user)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
        {
            { "UserName", user.UserName },
            {"role",user.RoleId.ToString()},
            {"Id", user.Id.ToString()},            
        };
            return new AuthenticationProperties(data);
        }
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

    }
}