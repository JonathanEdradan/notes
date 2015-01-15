def valid_ip(ip_address)
	ips = ip_address.split(".")

	ips.each do |i|
		i = i.to_i
		if i < 0 || i > 255 || i.length != 4
			return "Not a valid ip address"
		end
	end
	return "Valid ip address"
end

valid_ip(125.2.45.022)
