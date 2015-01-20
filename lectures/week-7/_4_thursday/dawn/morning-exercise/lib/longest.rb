def longest_word(string)
	longest_word_arr = string.split(' ')
	longest_word_arr.sort { |a, b| a.length <=> b.length }
	longest_word_arr.last
end

longest_word("Beware the Jubjub bird, and shun the frumious Bandersnatch")